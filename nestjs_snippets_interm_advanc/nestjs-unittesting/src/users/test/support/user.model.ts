import { MockModel } from "../../../database/test/support/mock.model";
import { User } from "../../schemas/user.schema";
import { userStub } from "../stubs/user.stub";


// pass the stub to the mock user model
export class UserModel extends MockModel<User>{
    protected entityStub = userStub()
}