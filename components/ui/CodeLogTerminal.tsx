"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

interface LogEntry {
  id: string;
  timestamp: string;
  message: string;
  type: "info" | "success" | "warning" | "error";
}

interface CodeLogTerminalProps {
  logs?: LogEntry[];
  autoScroll?: boolean;
  maxLines?: number;
  className?: string;
}

export function CodeLogTerminal({ 
  logs: initialLogs, 
  autoScroll = true, 
  maxLines = 10,
  className = "" 
}: CodeLogTerminalProps) {
  const [logs, setLogs] = useState<LogEntry[]>(initialLogs || []);
  const [displayedLogs, setDisplayedLogs] = useState<LogEntry[]>([]);
  const scrollRef = useRef<HTMLDivElement>(null);
  const currentIndexRef = useRef(0);

  useEffect(() => {
    if (!initialLogs || initialLogs.length === 0) {
      // Generate mock logs
      const mockLogs: LogEntry[] = [
        { id: '1', timestamp: '12:00:00', message: '> INIT_ORACLE_NETWORK...', type: 'info' },
        { id: '2', timestamp: '12:00:01', message: '> SYNCING_NODES...', type: 'info' },
        { id: '3', timestamp: '12:00:02', message: '> VALIDATING_EVENTS...', type: 'info' },
        { id: '4', timestamp: '12:00:03', message: '> PROCESSING_PREDICTIONS...', type: 'info' },
        { id: '5', timestamp: '12:00:04', message: '> MASKING_ORIGIN... [OK]', type: 'success' },
        { id: '6', timestamp: '12:00:05', message: '> ENCRYPTING_PAYLOAD... [OK]', type: 'success' },
        { id: '7', timestamp: '12:00:06', message: '> INIT_ZK_PROOF_SEQUENCE', type: 'info' },
      ];
      setLogs(mockLogs);
    }
  }, [initialLogs]);

  useEffect(() => {
    if (logs.length === 0) return;

    const interval = setInterval(() => {
      if (currentIndexRef.current < logs.length) {
        setDisplayedLogs((prev) => {
          const newLogs = [...prev, logs[currentIndexRef.current]];
          if (newLogs.length > maxLines) {
            return newLogs.slice(-maxLines);
          }
          return newLogs;
        });
        currentIndexRef.current++;
      } else {
        // Reset and loop
        currentIndexRef.current = 0;
        setDisplayedLogs([]);
      }
    }, 800);

    return () => clearInterval(interval);
  }, [logs, maxLines]);

  useEffect(() => {
    if (autoScroll && scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [displayedLogs, autoScroll]);

  const getLogColor = (type: string) => {
    switch (type) {
      case "success":
        return "text-[#FF6B35]";
      case "warning":
        return "text-[#F7931E]";
      case "error":
        return "text-[#FF006E]";
      default:
        return "text-[#E0E0E0]";
    }
  };

  return (
    <div className={`bg-[#1A0A1A] border-2 border-[#2A1A2A] rounded-xl p-6 relative ${className}`}>
      <div className="absolute top-4 right-4 text-[#FF006E] text-xs font-mono font-semibold">
        LOGS
      </div>
      
      <div
        ref={scrollRef}
        className="h-48 overflow-y-auto font-mono text-sm space-y-1 pr-4"
        style={{
          scrollbarWidth: "thin",
          scrollbarColor: "#FF006E #1A0A1A",
        }}
      >
        {displayedLogs.map((log, index) => {
          if (!log || !log.type) return null;
          return (
            <motion.div
              key={log.id || index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
              className={`${getLogColor(log.type)} flex items-start gap-2`}
            >
              <span className="text-[#FF006E]/60 font-mono text-xs">{log.timestamp || ''}</span>
              <span className="text-[#FF006E]/40">3f{index.toString(16)}:</span>
              <span>{log.message || ''}</span>
              {log.type === "success" && (
                <span className="text-[#FF6B35] ml-2">[OK]</span>
              )}
            </motion.div>
          );
        })}
        {displayedLogs.length === 0 && (
          <div className="text-[#E0E0E0]/40 font-mono text-sm">Waiting for logs...</div>
        )}
      </div>
    </div>
  );
}

