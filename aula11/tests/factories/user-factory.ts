import { UserInput } from "../../src/repository";
import prisma from "database";

export async function createUser(userData: UserInput) {
      const user = await prisma.user.create({
        data: userData
      });

      return user;
}