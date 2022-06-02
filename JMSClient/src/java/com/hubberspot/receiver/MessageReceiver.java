
package com.hubberspot.receiver;

import javax.annotation.Resource;
import javax.jms.ConnectionFactory;
import javax.jms.JMSConsumer;
import javax.jms.JMSContext;
import javax.jms.Queue;

public class MessageReceiver {
    @Resource(mappedName = "jms/myConnectionFactory")
    private static ConnectionFactory connectionFactory;
    
    @Resource(mappedName = "jms/MyQueue")
    private static Queue queue;
    
    public static void main(String[] args) {
        JMSContext jmsContext = connectionFactory.createContext();
        JMSConsumer jmsConsumer = jmsContext.createConsumer(queue);
        System.out.println("Receiving Messages...\n");
        String message = jmsConsumer.receiveBody(String.class);
        System.out.println("Message received -\n" + message);
    }
}
