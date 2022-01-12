interface Member {
	id: number;
	name: string;
	email: string;
	points: number;
	note?: string;
}

const memberList = new Map<number, Member>();
memberList.set(33456, {id: 33456, name: "田中太郎", email: "bow@example.com", points: 35, note: "ちょ〜イケメン。"});
memberList.set(47783, {id: 47783, name: "鈴木二郎", email: "mue@example.com", points: 53});

export function getTotalPointsByForEach(): number {
	let total = 0;
	memberList.forEach(
		(member: Member, id: number): void => {
			total += member.points;
		}
	);
	return total;
}

export function getTotalPointsByForOf() {
	let total = 0;
	for(const member of memberList.values()) {
		total += member.points;
	}
	return total;
}
