FROM eclipse-temurin:21-jdk

WORKDIR /app

COPY Calculator.java .

RUN javac Calculator.java

CMD ["java", "Calculator"]