// orderOfPresentation
// 문제
// 말썽꾸러기 김코딩은 오늘도 장난을 치다가 조별 발표 순서가 담긴 통을 쏟고 말았습니다.

// 선생님께서는 미리 모든 발표 순서의 경우의 수를 저장해 놓았지만 김코딩의 버릇을 고치기 위해 문제를 내겠다고 말씀하셨습니다.

// 김코딩은 모든 조별 발표 순서에 대한 경우의 수를 차례대로 구한 뒤 발표 순서를 말하면 이 발표 순서가 몇 번째 경우의 수인지를 대답해야 합니다.

// 총 조의 수 N과 선생님이 말씀하시는 발표 순서 k가 주어질 때, 김코딩이 정답을 말 할 수 있게 올바른 리턴 값을 구하세요.

// 모든 경우의 수가 담긴 배열은 번호가 작을수록 앞에 위치한다고 가정합니다.
// ex) N = 3일경우, [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]

// 입력
// 인자 1: N
// Number 타입의 1 <= N <= 12인 조의 개수
// 인자 2: K
// Number타입의 Array (0 <= index)
// ex) n이 3이고 k가 [2, 3, 1]일 경우

// 모든 경우의 수를 2차원 배열에 담는다면 [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]이 되고,

// 반환하는 값은 3이 됩니다.

// 주의사항
// k내에 중복되는 요소는 없다고 가정합니다.

// 입출력 예시
// let output = orderOfPresentation(3, [2, 3, 1]);
// console.log(output); // 3

// output = orderOfPresentation(5, [1, 3, 2, 4, 5])
// console.log(output); // 6

function orderOfPresentation (N, K) {
    // TODO: 여기에 코드를 작성합니다.
    let factorial = num => {
      if (num <= 1) { 
        return 1;
      }
      return num * factorial(num - 1);
    };
  
  let result = 0;
  
  const isUsed = Array(N + 1).fill(false);
  
  for (let i = 0; i < K.length; i++) {
    const variable = K[i];
    isUsed[variable] = true;
    const cases = isUsed.slice(1, variable);
    const unusedNum = cases.filter(order => order === false).length;
    const preunusedNum = unusedNum * factorial(N - i - 1);
    result = result + preunusedNum;
  }
  return result;
  } 
  
  let output = orderOfPresentation(3, [2, 3, 1]);
  console.log(output);

  output = orderOfPresentation(5, [1, 3, 2, 4, 5])
  console.log(output);