/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
/**
 * 本题目查找没有重复的字符串的长度，所以将没有重复的值按顺序放入新数组temp中，当
 * 出现重复数值时，则表示temp的第一个元素的字符串出现了重复字符，重新以第二个元素
 * 为开头继续往下寻找。在删除di
 */
 var lengthOfLongestSubstring = function(s) {
    let res = 0, temp = []
    for (let i=0;i<s.length;i++) {
        if (temp.indexOf(s[i]) == -1) { //数组中无被遍历的值
            temp.push(s[i]) //将不重复的值去除
        } else {
            temp.shift() //因为有重复值出现，去除第一个元素
            i-- //控制i的值，将刚才重复的值重新压入数组
            continue    //不再进行res的赋值
        }
        res = Math.max(res, temp.length)    //Math.max(a, b)选出两个值中较大的那个值
    }
    return res
};
// @lc code=end

