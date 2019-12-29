/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function(word1, word2) {
    var m = word1.length;
    var n = word2.length;
  
    if(m === 0 || n === 0) return m || n;
  
    // 初始化 dp
    var dp = new Array(m + 1);
  
    for (var i = 0; i <= m; i++) {
      dp[i] = new Array(n + 1);
      dp[i][0] = i;
    }
    for (var j = 0; j <= n; j++) {
      dp[0][j] = j;
    }
  
    // 遍历
    for (var i = 1; i <= m; i++) {
      for (var j = 1; j <= n; j++) {
        if(word1.charAt(i-1) === word2.charAt(j-1)){
          dp[i][j] = dp[i-1][j-1];
        }else{
          dp[i][j] = Math.min(
            dp[i][j-1], // 删除
            dp[i-1][j], // 插入
            dp[i-1][j-1] // 替换
          ) + 1;
        }
      }
    }
  
    return dp[m][n];
  };