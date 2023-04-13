import { type TRPCErrorData } from "./types/TRPCError";

const trpcErrorUtils = {
  parseMessage: (message: string | undefined) => {
    return message ? (JSON.parse(message) as TRPCErrorData) : undefined;
  },
};

export default trpcErrorUtils;
