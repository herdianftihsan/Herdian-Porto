"use client";

import React, { createContext, useContext, useState, useCallback } from "react";
import { Check, Info } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface ToastContextType {
  showToast: (message: string, isSuccess?: boolean) => void;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [toast, setToast] = useState<{ message: string; isSuccess: boolean } | null>(null);

  const showToast = useCallback((message: string, isSuccess = true) => {
    setToast({ message, isSuccess });
    setTimeout(() => {
      setToast((prev) => (prev?.message === message ? null : prev));
    }, 2400);
  }, []);

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      <AnimatePresence>
        {toast && (
          <motion.div
            role="status"
            aria-live="polite"
            initial={{ opacity: 0, y: 20, x: "-50%" }}
            animate={{ opacity: 1, y: 0, x: "-50%" }}
            exit={{ opacity: 0, y: 15, x: "-50%" }}
            transition={{ duration: 0.25, ease: [0.2, 0.9, 0.3, 1] }}
            className="fixed bottom-6 left-1/2 z-50 flex items-center gap-2.5 rounded-xl border border-white/20 bg-[#27272A] px-4 py-2.5 text-sm text-[#FAFAFA] shadow-2xl backdrop-blur-md"
          >
            {toast.isSuccess ? (
              <Check className="h-4 w-4 text-[#FAFAFA]" />
            ) : (
              <Info className="h-4 w-4 text-[#D4D4D8]" />
            )}

            <span>{toast.message}</span>
          </motion.div>
        )}
      </AnimatePresence>
    </ToastContext.Provider>
  );
}

export function useToast() {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error("useToast must be used within a ToastProvider");
  }
  return context;
}
