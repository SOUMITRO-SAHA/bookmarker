import {trpc} from "../trpc"
export const useEmailVerifyCheck = () => {
    const emailCheck = trpc.viewer.shouldVerifyEmail.useQuery(undefined, retry(failureCount) {
        return failureCount > 3;
    });
    
    return (emailCheck);
}