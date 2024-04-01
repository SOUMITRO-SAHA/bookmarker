import { router } from "../../trpc";
import {me} from "./"

export const loggedInViewerRouter = router({
    me,
    
})