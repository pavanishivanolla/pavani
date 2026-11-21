
import java.util.Scanner;

public class Convert {
    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        System.out.print("Enter phone number: ");
        String phone = sc.nextLine().toUpperCase();

        String result = "";

        for (int i = 0; i < phone.length(); i++) {
            char ch = phone.charAt(i);

            if (ch >= '0' && ch <= '9') {
                result += ch;
            }
            else if (ch >= 'A' && ch <= 'C') {
                result += "2";
            }
            else if (ch >= 'D' && ch <= 'F') {
                result += "3";
            }
            else if (ch >= 'G' && ch <= 'I') {
                result += "4";
            }
            else if (ch >= 'J' && ch <= 'L') {
                result += "5";
            }
            else if (ch >= 'M' && ch <= 'O') {
                result += "6";
            }
            else if (ch >= 'P' && ch <= 'S') {
                result += "7";
            }
            else if (ch >= 'T' && ch <= 'V') {
                result += "8";
            }
            else if (ch >= 'W' && ch <= 'Z') {
                result += "9";
            }
        }

        if (result.length() == 10) {
            System.out.println("Converted Number: (" +
                result.substring(0, 3) + ") " +
                result.substring(3, 6) + "-" +
                result.substring(6));
        } else {
            System.out.println("Enter a valid 10-digit phone number");
        }

        sc.close();
    }
}
