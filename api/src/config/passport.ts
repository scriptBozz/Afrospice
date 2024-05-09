
import { Strategy as JwtStrategy, ExtractJwt } from "passport-jwt"
import dotenv from "dotenv"
import { s_findUserByEmail } from "../services/user";



dotenv.config()
const JWT_SECRET = process.env.JWT_SECRET as string;

export const jwtstrategy = new JwtStrategy({
    secretOrKey: JWT_SECRET,
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken()
}, async (payload, done) => {
    const userEmail = payload.email;
    const foundUser = await s_findUserByEmail(userEmail);
    done(null, foundUser)
    //next

}
);
