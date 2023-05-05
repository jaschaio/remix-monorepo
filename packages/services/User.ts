// Any import from crypto will fail, e.G. createHmac, createDecipheriv or createHash
import { randomBytes } from 'crypto';

// Just pseudo code to make a point
export const getToken = ( length: number ) => {

    return randomBytes( Math.ceil( length / 2 ) )
        .toString( 'hex' )
        .slice( 0, length );

};