export function trimAnswers(ans: any[], len: number = 4): any[] {
  console.log('trimming',ans.length, len)
  let ansT = ans;
  if (ans.length >= len) {
    ansT = ans.slice(0, -1);
    if (ansT.length >= len && ansT.length > 0) {
      ansT = trimAnswers(ansT, len)
    }
  }

  return ansT
}
