'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ChevronDown, 
  Feather,
  Layers, 
  Layout, 
  Navigation2,
  Database, 
  MessageSquare, 
  FileText, 
  Settings
} from 'lucide-react';

const componentGroups = {
  'Core': ['Button', 'Input', 'Select', 'Checkbox', 'Radio', 'Switch', 'Toggle', 'Textarea'],
  'Layout': ['Container', 'Grid', 'Stack', 'Divider', 'Space', 'AspectRatio'],
  'Navigation': ['Menu', 'Tabs', 'Breadcrumb', 'Pagination', 'Stepper'],
  'Data': ['Table', 'List', 'Tree', 'Timeline', 'Calendar', 'Stats'],
  'Feedback': ['Alert', 'Toast', 'Progress', 'Spinner', 'Skeleton', 'Modal'],
  'Forms': ['Form', 'DatePicker', 'TimePicker', 'Upload', 'ColorPicker'],
  'Customization': ['Theme', 'Colors']
};

const groupIcons = {
  'Core': Layers,
  'Layout': Layout,
  'Navigation': Navigation2,
  'Data': Database,
  'Feedback': MessageSquare,
  'Forms': FileText,
  'Customization': Settings
};

const groupGradients = {
  'Core': 'from-[#FF6B6B] to-[#FF8E53]',
  'Layout': 'from-[#4ECDC4] to-[#45B7D1]',
  'Navigation': 'from-[#A8E6CF] to-[#3EECAC]',
  'Data': 'from-[#3B82F6] to-[#2DD4BF]',
  'Feedback': 'from-[#F472B6] to-[#EC4899]',
  'Forms': 'from-[#8B5CF6] to-[#6366F1]',
  'Customization': 'from-[#F59E0B] to-[#EF4444]'
};

export function Sidebar() {
  const [activeGroup, setActiveGroup] = useState<string | null>(null);
  const [hoveredGroup, setHoveredGroup] = useState<string | null>(null);

  return (
    <motion.aside
      initial={{ x: -300, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 100, damping: 20 }}
      className="fixed left-0 top-0 bottom-0 w-72 m-6"
    >
      <div className="h-full bg-black/20 backdrop-blur-xl rounded-3xl border border-white/10 shadow-2xl overflow-hidden">
        {/* Logo Section */}
        <div className="relative h-24 flex items-center px-8 bg-gradient-to-br from-[#FF6B6B]/20 to-transparent">
          <Link href="/" className="flex items-center space-x-3 group">
            <motion.div
              whileHover={{ rotate: 360, scale: 1.1 }}
              transition={{ duration: 0.5 }}
              className="p-2 rounded-xl bg-gradient-to-br from-[#FF6B6B] to-[#4ECDC4]"
            >
              <Feather className="w-8 h-8 text-white" />
            </motion.div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold bg-gradient-to-r from-[#FF6B6B] to-[#4ECDC4] text-transparent bg-clip-text">
                ParrotUI
              </span>
              <span className="text-xs text-white/60">Component Library</span>
            </div>
          </Link>
          <motion.div 
            className="absolute -top-12 -right-12 w-24 h-24 bg-gradient-to-br from-[#FF6B6B]/20 to-transparent rounded-full blur-2xl"
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3]
            }}
            transition={{ 
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>

        {/* Navigation */}
        <nav className="p-4 space-y-2 h-[calc(100%-6rem)] overflow-y-auto custom-scrollbar">
          {Object.entries(componentGroups).map(([group, components]) => {
            const Icon = groupIcons[group as keyof typeof groupIcons];
            const gradient = groupGradients[group as keyof typeof groupGradients];
            const isActive = activeGroup === group;
            const isHovered = hoveredGroup === group;

            return (
              <motion.div 
                key={group} 
                layout
                onHoverStart={() => setHoveredGroup(group)}
                onHoverEnd={() => setHoveredGroup(null)}
              >
                <motion.button
                  onClick={() => setActiveGroup(isActive ? null : group)}
                  className={`w-full flex items-center justify-between p-3 rounded-xl transition-all duration-300
                    ${isActive || isHovered ? 'bg-gradient-to-r ' + gradient : 'hover:bg-white/10'}`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="flex items-center space-x-3">
                    <div className={`p-2 rounded-lg ${isActive || isHovered ? 'bg-white/20' : 'bg-white/10'}`}>
                      <Icon className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-sm font-medium text-white">{group}</span>
                  </div>
                  <motion.div
                    animate={{ rotate: isActive ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown className="w-4 h-4 text-white/80" />
                  </motion.div>
                </motion.button>

                <AnimatePresence>
                  {isActive && (
                    <motion.ul
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="mt-2 ml-4 space-y-1"
                    >
                      {components.map((component, index) => (
                        <motion.li
                          key={component}
                          initial={{ x: -20, opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          exit={{ x: -20, opacity: 0 }}
                          transition={{ delay: index * 0.05 }}
                        >
                          <Link
                            href={`/components/${component.toLowerCase()}`}
                            className="flex items-center space-x-2 p-2 text-sm text-white/70 hover:text-white rounded-lg hover:bg-white/10 transition-all duration-200"
                          >
                            <div className="w-1 h-1 rounded-full bg-white/40" />
                            <span>{component}</span>
                          </Link>
                        </motion.li>
                      ))}
                    </motion.ul>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </nav>
      </div>
    </motion.aside>
  );
}