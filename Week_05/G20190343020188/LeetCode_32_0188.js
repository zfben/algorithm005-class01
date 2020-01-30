/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function(s) {
    var maxans = 0;
    var dp = new Array(s.length).fill(0);
    
    for (var i = 1; i < s.length; i++) {
        if (s.charAt(i) == ')') {
            if (s.charAt(i - 1) === '(') {
                dp[i] = (i >= 2 ? dp[i - 2] : 0) + 2;
            } else if (i - dp[i - 1] > 0 && s.charAt(i - dp[i - 1] - 1) == '(') {
                dp[i] = dp[i - 1] + ((i - dp[i - 1]) >= 2 ? dp[i - dp[i - 1] - 2] : 0) + 2;
            }
            maxans = Math.max(maxans, dp[i]);
        }
    }
    return maxans;
};