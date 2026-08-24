import { Plan } from "@/types/plans";
import { currentUser, auth } from "@clerk/nextjs/server"
import { db } from "./prisma";
import { PLANS } from "./constants";

const getCurrentPlan = async():Promise<Plan>=> {
    const {has} = await auth();
    if(has({ plan: "pro"})) return "pro";
    if(has({ plan: "starter"})) return "starter";
    return "free";
}

export const checkUser = async() => {
    const user = await currentUser();
    if(!user) return null;

    try {
        const currentPlan = await getCurrentPlan();

        const existing = await db.user.findUnique({
            where: { clerkId: user.id}
        })

        if(existing) {
            if(existing.plan !== currentPlan) {
                const updated = await db.user.update({
                    where: {clerkId: user.id},
                    data: {
                        plan: currentPlan,
                        credits: { increment: PLANS[currentPlan].credits },
                    }
                })
                return updated;
            }
            return existing;
        }

        const firstName = user.firstName || "";
        const lastName = user.lastName || "";
        const name = `${firstName} ${lastName}`.trim() || user.emailAddresses[0].emailAddress;

        const newUser = await db.user.create({
            data: {
                clerkId: user.id,
                name: name,
                email: user.emailAddresses[0].emailAddress,
                credits: PLANS[currentPlan].credits,
                plan: currentPlan,
            }
        })
        return newUser;
    } catch (error) {
        console.error("checkUser error: ", error);
        return null
    }
}