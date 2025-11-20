import { Resonate } from "@resonatehq/cloudflare";
import type { Context } from "@resonatehq/sdk";


const resonate = new Resonate();

export function* fib(ctx: Context, n: number): Generator<any, number, any> {
	if (n <= 1) {
		return n;
	}
	const p1 = yield ctx.beginRpc(
		"fib",
		n - 1,
		ctx.options({ id: `fib-${n - 1}` }),
	);
	const p2 = yield ctx.beginRpc(
		"fib",
		n - 2,
		ctx.options({ id: `fib-${n - 2}` }),
	);

	return (yield p1) + (yield p2);
}

resonate.register(fib);

export default resonate.handlerHttp();
