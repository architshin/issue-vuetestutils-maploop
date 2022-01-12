<template>
	<p>Total points(forEach): {{totalPointsByForEach}}</p>
	<p>Total points(for-of): {{totalPointsByForOf}}</p>
</template>

<script lang="ts">
import {defineComponent, ref, computed} from "vue";

export default defineComponent({
	name: "App",
	setup() {
		const memberListInit = new Map<number, Member>();
		memberListInit.set(33456, {id: 33456, points: 35});
		memberListInit.set(47783, {id: 47783, points: 53});
		const memberList = ref(memberListInit);
		const totalPointsByForEach = computed(
			(): number => {
				let total = 0;
				memberList.value.forEach(
					(member: Member, id: number): void => {
						total += member.points;
					}
				);
				return total;
			}
		);
		const totalPointsByForOf = computed(
			(): number => {
				let total = 0;
				for(const member of memberList.value.values()) {
						total += member.points;
				}
				return total;
			}
		);
		return {
			memberList,
			totalPointsByForEach,
			totalPointsByForOf
		}
	}
});

interface Member {
	id: number;
	points: number;
}
</script>
