import type { Express } from "express";
import { createServer, type Server } from "http";
import { z } from "zod";
import { insertContactMessageSchema } from "@shared/schema";
import { storage } from "./storage";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactMessageSchema.parse(req.body);
      
      const message = await storage.createContactMessage(validatedData);
      
      // In a real implementation, you would send an email here
      // For now, we'll just log the message
      console.log("New contact message:", message);
      
      res.json({ 
        success: true, 
        message: "Thank you for your message! We'll get back to you within 24 hours.",
        id: message.id 
      });
    } catch (error) {
      console.error("Error processing contact form:", error);
      
      if (error instanceof z.ZodError) {
        return res.status(400).json({
          success: false,
          message: "Please check your form data",
          errors: error.errors
        });
      }
      
      res.status(500).json({
        success: false,
        message: "Sorry, there was an error sending your message. Please try again."
      });
    }
  });

  // Get contact messages (for admin purposes)
  app.get("/api/contact-messages", async (req, res) => {
    try {
      const messages = await storage.getContactMessages();
      res.json(messages);
    } catch (error) {
      console.error("Error fetching contact messages:", error);
      res.status(500).json({
        success: false,
        message: "Error fetching messages"
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
