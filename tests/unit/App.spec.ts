import {mount} from "@vue/test-utils";
import App from "@/App.vue";

describe(
	"Tests of App.vue",
	() => {
		test(
			"a test of total points",
			() => {
				const wrapper = mount(App);
				const actualHTML = wrapper.html();
				const expectedForEach = "Total points(forEach): 88";
				const expectedForOf = "Total points(for-of): 88";
				expect(actualHTML).toContain(expectedForEach);
				expect(actualHTML).toContain(expectedForOf);
			}
		);
	}
);
