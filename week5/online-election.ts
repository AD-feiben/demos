class TopVotedCandidate {
  tops: Array<number>;
  times: Array<number>;

  constructor(persons: number[], times: number[]) {
    /** person: votes */
    let map: Map<number, number> = new Map();
    let winner: number | null = null;
    this.times = times;
    this.tops = [];

    for (let i = 0; i < persons.length; i++) {
      let person = persons[i];
      let votes = (map.get(person) || 0) + 1;
      map.set(person, votes);
      if (winner === null || votes >= map.get(winner)) {
        winner = person;
      }

      this.tops.push(winner);
    }
  }

  q(t: number): number {
    let left = 0,
      right = this.times.length - 1;
    while (left < right) {
      let mid = (left + right + 1) >> 1;
      if (this.times[mid] <= t) {
        left = mid;
      } else {
        right = mid - 1;
      }
    }
    return this.tops[right];
  }
}

/**
 * Your TopVotedCandidate object will be instantiated and called as such:
 * var obj = new TopVotedCandidate(persons, times)
 * var param_1 = obj.q(t)
 */
