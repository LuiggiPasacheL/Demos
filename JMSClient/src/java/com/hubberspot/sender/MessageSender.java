
package com.hubberspot.sender;

import java.util.Scanner;
import javax.annotation.Resource;
import javax.jms.ConnectionFactory;
import javax.jms.JMSContext;
import javax.jms.JMSProducer;
import javax.jms.Queue;

public class MessageSender {
    @Resource(mappedName = "jms/myConnectionFactory")
    private static ConnectionFactory connectionFactory;
    
    @Resource(mappedName = "jms/MyQueue")
    private static Queue queue;

    public static void main(String[] args) {
        JMSContext jmsContext = connectionFactory.createContext();
        JMSProducer jmsProducer = jmsContext.createProducer();
        /*Scanner sc = new Scanner(System.in);
        String nombre = sc.nextLine();
        String apellido = sc.nextLine();
        int edad = sc.nextInt();*/
        String message = "Soy Oscar";
        System.out.println("Sending message to JMS - ");
        jmsProducer.send(queue, message);
        System.out.println("Message send successfully!!!");
    }
    
}
