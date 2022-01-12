import {getTotalPointsByForEach, getTotalPointsByForOf} from "@/functions";

describe(
	"tests of functions",
	() => {
		test(
			"a test of getTotalPointsByForEach",
			() => {
				const actual = getTotalPointsByForEach();
				const expected = 88;
				expect(actual).toBe(expected);
			}
		);
		test(
			"a test of getTotalPointsByForOf",
			() => {
				const actual = getTotalPointsByForOf();
				const expected = 88;
				expect(actual).toBe(expected);
			}
		);
	}
);
