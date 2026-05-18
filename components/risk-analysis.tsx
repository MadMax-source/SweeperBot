'use client';

import { motion } from 'framer-motion';
import { Lock, Calendar } from 'lucide-react';

export function RiskAnalysis() {
  const radarData = [
    { label: 'Liquidity', value: 88, angle: -90 },
    { label: 'Market', value: 70, angle: -18 },
    { label: 'Team', value: 75, angle: 54 },
    { label: 'Security', value: 92, angle: 126 },
    { label: 'Holder Dist.', value: 65, angle: 198 },
  ];

  const metrics = [
    { label: 'VOLATILITY', value: 'LOW', type: 'chart' },
    { label: 'LIQUIDITY LOCK', value: '12 MONTHS', icon: Lock },
    { label: 'CONTRACT AGE', value: '28 DAYS', icon: Calendar },
  ];

  return (
    <div className="rounded-xl border border-border bg-card p-5 h-full">
      <motion.h3 
        className="mb-4 text-sm font-semibold text-white"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2 }}
      >
        RISK ANALYSIS
      </motion.h3>

      <div className="flex flex-col lg:flex-row gap-6">
        {/* Risk Score */}
        <motion.div 
          className="flex-shrink-0"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, type: 'spring' }}
        >
          <div className="rounded-lg border border-border bg-secondary/50 p-4">
            <div className="text-xs text-muted-foreground">RISK SCORE</div>

            <div className="mt-1">
              <motion.span 
                className="text-3xl font-bold text-primary"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5, type: 'spring', stiffness: 200 }}
              >
                18
              </motion.span>

              <span className="text-lg text-muted-foreground">/100</span>
            </div>

            <motion.div 
              className="mt-1 text-xs font-semibold text-[#ff6b00]"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              LOW RISK
            </motion.div>

            <div className="mt-1 text-[10px] text-muted-foreground">Minimal issues detected</div>
          </div>
        </motion.div>

        {/* Radar Chart */}
        <motion.div 
          className="relative flex-1"
          initial={{ opacity: 0, rotate: -10 }}
          animate={{ opacity: 1, rotate: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <svg viewBox="0 0 200 200" className="mx-auto h-40 w-40">
            {/* Background pentagon */}
            <motion.polygon
              points="100,20 180,65 165,155 35,155 20,65"
              fill="none"
              stroke="#1e293b"
              strokeWidth="1"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            />

            <motion.polygon
              points="100,40 160,75 150,140 50,140 40,75"
              fill="none"
              stroke="#1e293b"
              strokeWidth="1"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            />

            <motion.polygon
              points="100,60 140,85 135,125 65,125 60,85"
              fill="none"
              stroke="#1e293b"
              strokeWidth="1"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
            />

            {/* Data polygon */}
            <motion.polygon
              points="100,25 172,68 155,148 45,145 28,70"
              fill="rgba(59, 130, 246, 0.2)"
              stroke="#3b82f6"
              strokeWidth="2"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8, duration: 0.8, ease: 'easeOut' }}
              style={{ transformOrigin: 'center' }}
            />

            {/* Data points */}
            {radarData.map((item, i) => {
              const angles = [-90, -18, 54, 126, 198];
              const radius = (item.value / 100) * 80;
              const x = 100 + radius * Math.cos((angles[i] * Math.PI) / 180);
              const y = 100 + radius * Math.sin((angles[i] * Math.PI) / 180);

              return (
                <motion.circle 
                  key={item.label} 
                  cx={x} 
                  cy={y} 
                  r="4" 
                  fill="#3b82f6"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.9 + i * 0.1, type: 'spring' }}
                />
              );
            })}
          </svg>

          {/* Labels */}
          <motion.div 
            className="absolute left-1/2 top-0 -translate-x-1/2 text-[10px] text-muted-foreground text-center"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
          >
            Liquidity
            <br />
            <span className="font-semibold text-primary">88</span>
          </motion.div>

          <motion.div 
            className="absolute right-0 top-8 text-right text-[10px] text-muted-foreground"
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.1 }}
          >
            Market
            <br />
            <span className="font-semibold text-primary">70</span>
          </motion.div>

          <motion.div 
            className="absolute bottom-8 right-2 text-right text-[10px] text-muted-foreground"
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.2 }}
          >
            Team
            <br />
            <span className="font-semibold text-primary">75</span>
          </motion.div>

          <motion.div 
            className="absolute bottom-8 left-2 text-[10px] text-muted-foreground"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.3 }}
          >
            Holder Dist.
            <br />
            <span className="font-semibold text-primary">65</span>
          </motion.div>

          <motion.div 
            className="absolute left-0 top-8 text-[10px] text-muted-foreground"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.4 }}
          >
            Security
            <br />
            <span className="font-semibold text-primary">92</span>
          </motion.div>
        </motion.div>
      </div>

      {/* Metrics */}
      <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-3">
        {metrics.map((metric, index) => (
          <motion.div 
            key={metric.label} 
            className="rounded-lg border border-border bg-secondary/30 p-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5 + index * 0.1 }}
            whileHover={{ scale: 1.02, borderColor: 'rgba(59, 130, 246, 0.5)' }}
          >
            <div className="text-[10px] text-muted-foreground">{metric.label}</div>

            <div className="mt-1 flex items-center gap-1">
              <span
                className={`text-sm font-semibold ${
                  metric.label === 'LIQUIDITY LOCK' ? 'text-[#ff6b00]' : 'text-white'
                }`}
              >
                {metric.value}
              </span>

              {metric.icon && <metric.icon className="h-3 w-3 text-muted-foreground" />}
            </div>

            {metric.type === 'chart' && (
              <motion.svg className="mt-1 h-4 w-full">
                <motion.path
                  d="M0,10 Q10,8 20,9 T40,7 T60,8 T80,6"
                  fill="none"
                  stroke="#3b82f6"
                  strokeWidth="1.5"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ delay: 1.7, duration: 1 }}
                />
              </motion.svg>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
}
