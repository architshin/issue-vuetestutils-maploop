interface Member {
	id: number;
	points: number;
}

const memberList = new Map<number, Member>();
memberList.set(33456, {id: 33456, points: 35});
memberList.set(47783, {id: 47783, points: 53});

export function getTotalPointsByForEach(): number {
	let total = 0;
	memberList.forEach(
		(member: Member, id: number): void => {
			total += member.points;
		}
	);
	return total;
}

export function getTotalPointsByForOf(): number {
	let total = 0;
	for(const member of memberList.values()) {
		total += member.points;
	}
	return total;
}
