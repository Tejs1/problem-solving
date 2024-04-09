class App {

  int diffMinEvenMaxOdd() {
    int minEven = 0;
    int maxOdd = 0;
    int[] arr = { 1, 2, 3, 4, 5, 6, 7, 8, 9 };
    for (int i = 0; i < arr.length; i++) {
      if (arr[i] % 2 == 0) {
        if (minEven == 0 || arr[i] < minEven) {
          minEven = arr[i];
        }
      } else {
        if (maxOdd == 0 || arr[i] > maxOdd) {
          maxOdd = arr[i];
        }
      }
    }

    return minEven - maxOdd;
  }

  public static void main(String[] args) {

    App app = new App();
    System.out.println(app.diffMinEvenMaxOdd());
  }

}
