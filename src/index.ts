import { Resonate } from "@resonatehq/cloudflare";
import { countdown } from "./count";

const resonate = new Resonate();

resonate.register("countdown", countdown);

export default resonate.handlerHttp();
