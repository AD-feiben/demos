/** 解法一 */
class Twitter {
  /** [{ userId, tweetId }] */
  newsList = [];
  /** userId: [ followeeId, followeeId, followeeId ] */
  users: Map<number, Set<number>> = new Map();
  constructor() {}

  postTweet(userId: number, tweetId: number): void {
    this.newsList.unshift({ userId, tweetId });
  }

  getNewsFeed(userId: number): number[] {
    let newsFeed = [];
    let followeeList = this.users.get(userId);
    /** 存在无效遍历 */
    for (let news of this.newsList) {
      if (followeeList?.has(news.userId) || news.userId === userId) {
        newsFeed.push(news.tweetId);
        if (newsFeed.length === 10) return newsFeed;
      }
    }
    return newsFeed;
  }

  follow(followerId: number, followeeId: number): void {
    let followeeList = this.users.get(followerId) || new Set();
    followeeList.add(followeeId);
    this.users.set(followerId, followeeList);
  }

  unfollow(followerId: number, followeeId: number): void {
    if (this.users.has(followerId) === false) return;
    this.users.get(followerId).delete(followeeId);
  }
}

/**
 * Your Twitter object will be instantiated and called as such:
 * var obj = new Twitter()
 * obj.postTweet(userId,tweetId)
 * var param_2 = obj.getNewsFeed(userId)
 * obj.follow(followerId,followeeId)
 * obj.unfollow(followerId,followeeId)
 */

/** 解法二 */
class Twitter {
  userMap: Map<
    number, // 用户 id
    { tweet: Array<{ time: number; tweetId: number }>; follow: Set<number> } // 用户的关注列表及推特内容
  >;
  time: number;
  constructor() {
    this.time = 0;
    this.userMap = new Map();
  }

  init(userId: number) {
    if (this.userMap.has(userId) === false) {
      this.userMap.set(userId, { tweet: [], follow: new Set() });
    }
  }

  postTweet(userId: number, tweetId: number): void {
    this.init(userId);
    let userInfo = this.userMap.get(userId);
    if (userInfo.tweet.length === 10) {
      userInfo.tweet.pop();
    }
    userInfo.tweet.unshift({
      time: ++this.time,
      tweetId,
    });
  }

  mergeTwoTweetList(l1, l2) {
    if (l1 === null && l2 === null) return [];
    if (l1 === null) return l2;
    if (l2 === null) return l1;

    let res = [];
    let index1 = 0;
    let index2 = 0;
    while (l1[index1] && l2[index2]) {
      if (l1[index1].time > l2[index2].time) {
        res.push(l1[index1]);
        index1++;
      } else {
        res.push(l2[index2]);
        index2++;
      }
    }
    if (index1 !== l1.length) res = res.concat(l1.slice(index1, l1.length));
    if (index2 !== l2.length) res = res.concat(l2.slice(index2, l2.length));
    return res;
  }

  mergeTweetList(tweetList, l: number, r: number) {
    if (l > r) return null;
    if (l === r) return tweetList[l];
    let mid = Math.floor((r - l) / 2) + l;
    return this.mergeTwoTweetList(
      this.mergeTweetList(tweetList, l, mid),
      this.mergeTweetList(tweetList, mid + 1, r)
    );
  }

  getNewsFeed(userId: number): number[] {
    this.init(userId);
    let { follow, tweet } = this.userMap.get(userId);
    let tweetList = [];
    tweetList.push(tweet);
    follow.forEach((followeeId) => {
      this.init(followeeId);
      let { tweet } = this.userMap.get(followeeId);
      tweetList.push(tweet);
    });
    let mergedTweet = this.mergeTweetList(tweetList, 0, tweetList.length - 1);
    return mergedTweet.map((item) => item.tweetId).slice(0, 10);
  }

  follow(followerId: number, followeeId: number): void {
    this.init(followerId);
    let userInfo = this.userMap.get(followerId);
    userInfo.follow.add(followeeId);
  }

  unfollow(followerId: number, followeeId: number): void {
    this.init(followerId);
    let userInfo = this.userMap.get(followerId);
    userInfo.follow.delete(followeeId);
  }
}

/**
 * Your Twitter object will be instantiated and called as such:
 * var obj = new Twitter()
 * obj.postTweet(userId,tweetId)
 * var param_2 = obj.getNewsFeed(userId)
 * obj.follow(followerId,followeeId)
 * obj.unfollow(followerId,followeeId)
 */
