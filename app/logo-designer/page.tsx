'use client';

import React, { useState, useRef } from 'react';
import AsrarLogo, { ElementType, LogoVariant } from '../../src/components/AsrarLogo';

/**
 * Asrār Logo Designer - Interactive Preview and Export Tool
 * 
 * This page allows you to:
 * - Preview different logo variants and themes
 * - Test element-based color palettes
 * - Export SVG and PNG assets for various use cases
 * - View the encoded sacred geometry symbolism
 */

const AsrarLogoDesigner = () => {
  const [variant, setVariant] = useState<LogoVariant>('wordmark');
  const [theme, setTheme] = useState<'gradient' | 'mono-light' | 'mono-dark'>('gradient');
  const [element, setElement] = useState<ElementType>('aether');
  const [showGrid, setShowGrid] = useState(false);
  const [animate, setAnimate] = useState(true);
  const [size, setSize] = useState(400);
  const svgRef = useRef<HTMLDivElement>(null);

  // Element-based color palettes for UI
  const elementPalettes = {
    fire: { primary: '#DC2626', secondary: '#F97316', tertiary: '#FCD34D' },
    water: { primary: '#1E40AF', secondary: '#3B82F6', tertiary: '#67E8F9' },
    earth: { primary: '#166534', secondary: '#22C55E', tertiary: '#A3E635' },
    air: { primary: '#6366F1', secondary: '#A78BFA', tertiary: '#E0E7FF' },
    aether: { primary: '#4F46E5', secondary: '#8B5CF6', tertiary: '#EC4899' }
  };

  const colors = elementPalettes[element];

  // Export functionality
  const exportSVG = () => {
    if (!svgRef.current) return;
    const svgElement = svgRef.current.querySelector('svg');
    if (!svgElement) return;
    
    const svgData = new XMLSerializer().serializeToString(svgElement);
    const blob = new Blob([svgData], { type: 'image/svg+xml' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `asrar-logo-${variant}-${element}.svg`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const exportPNG = (exportSize: number) => {
    if (!svgRef.current) return;
    const svgElement = svgRef.current.querySelector('svg');
    if (!svgElement) return;
    
    const canvas = document.createElement('canvas');
    canvas.width = exportSize;
    canvas.height = exportSize;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    const svgData = new XMLSerializer().serializeToString(svgElement);
    const img = new Image();
    img.onload = () => {
      ctx.drawImage(img, 0, 0, exportSize, exportSize);
      const a = document.createElement('a');
      a.href = canvas.toDataURL('image/png');
      a.download = `asrar-logo-${variant}-${exportSize}x${exportSize}.png`;
      a.click();
    };
    img.src = 'data:image/svg+xml;base64,' + btoa(unescape(encodeURIComponent(svgData)));
  };

  // UI Components
  const Button: React.FC<{ 
    children: React.ReactNode; 
    active?: boolean; 
    onClick?: () => void; 
    small?: boolean;
  }> = ({ children, active, onClick, small }) => (
    <button
      onClick={onClick}
      className={`
        ${small ? 'px-3 py-1.5 text-xs' : 'px-4 py-2.5 text-sm'}
        font-medium rounded-lg transition-all duration-200
        ${active 
          ? 'bg-gradient-to-r text-white shadow-lg' 
          : 'bg-white/10 text-gray-400 hover:bg-white/15'
        }
      `}
      style={{
        backgroundImage: active ? `linear-gradient(135deg, ${colors.primary}, ${colors.secondary})` : undefined,
        boxShadow: active ? `0 4px 15px ${colors.primary}4D` : undefined
      }}
    >
      {children}
    </button>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 p-8 text-gray-100">
      {/* Sacred geometry background pattern */}
      <div 
        className="fixed inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            radial-gradient(circle at 20% 80%, ${colors.primary}26 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, ${colors.tertiary}26 0%, transparent 50%),
            radial-gradient(circle at 50% 50%, ${colors.secondary}1A 0%, transparent 70%)
          `
        }}
      />

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <AsrarLogo size={80} variant="icon" element={element} animate={true} />
          </div>
          <h1 
            className="text-5xl font-light tracking-[0.15em] mb-3"
            style={{
              backgroundImage: `linear-gradient(135deg, ${colors.primary}, ${colors.secondary}, ${colors.tertiary})`,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}
          >
            ASRĀR LOGO DESIGNER
          </h1>
          <p className="text-gray-400 text-base tracking-wider">
            Sacred Geometry • ʿIlm al-Ḥurūf • Divine Timing
          </p>
        </div>

        <div className="grid lg:grid-cols-[1fr_400px] gap-12">
          {/* Preview Area */}
          <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-12 border border-white/10 flex flex-col items-center justify-center min-h-[500px]">
            {/* Context switcher */}
            <div className="flex gap-2 mb-8 p-1 bg-black/20 rounded-xl">
              {(['dark', 'light', 'gradient'] as const).map(bg => (
                <button
                  key={bg}
                  onClick={() => setTheme(bg === 'gradient' ? 'gradient' : `mono-${bg}`)}
                  className={`
                    px-4 py-2 text-xs rounded-lg transition-all capitalize
                    ${theme === (bg === 'gradient' ? 'gradient' : `mono-${bg}`)
                      ? 'bg-white/15 text-gray-100'
                      : 'text-gray-400 hover:bg-white/5'
                    }
                  `}
                >
                  {bg}
                </button>
              ))}
            </div>

            {/* Logo preview */}
            <div 
              ref={svgRef}
              className="rounded-2xl p-12 flex items-center justify-center shadow-2xl"
              style={{
                background: theme === 'mono-light' ? '#F9FAFB' : 
                           theme === 'mono-dark' ? '#1F2937' : 
                           'linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05))'
              }}
            >
              <AsrarLogo 
                size={size}
                variant={variant}
                element={element}
                mono={theme.startsWith('mono')}
                animate={animate}
                showGrid={showGrid}
              />
            </div>

            {/* Size slider */}
            <div className="mt-6 w-full max-w-xs">
              <label className="text-xs text-gray-400 block mb-2">
                Preview Size: {size}px
              </label>
              <input
                type="range"
                min="200"
                max="600"
                value={size}
                onChange={(e) => setSize(Number(e.target.value))}
                className="w-full"
                style={{ accentColor: colors.secondary }}
              />
            </div>
          </div>

          {/* Controls Panel */}
          <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10">
            {/* Variant Selection */}
            <div className="mb-8">
              <h3 className="text-sm text-gray-400 mb-3 tracking-widest">VARIANT</h3>
              <div className="flex flex-wrap gap-2">
                {[
                  { id: 'icon' as const, label: 'Icon Only' },
                  { id: 'wordmark' as const, label: 'With Wordmark' },
                  { id: 'horizontal' as const, label: 'Horizontal' }
                ].map(v => (
                  <Button key={v.id} active={variant === v.id} onClick={() => setVariant(v.id)}>
                    {v.label}
                  </Button>
                ))}
              </div>
            </div>

            {/* Element Selection */}
            <div className="mb-8">
              <h3 className="text-sm text-gray-400 mb-3 tracking-widest">ELEMENT THEME</h3>
              <div className="flex flex-wrap gap-2">
                {(Object.keys(elementPalettes) as ElementType[]).map(el => (
                  <Button key={el} active={element === el} onClick={() => setElement(el)}>
                    {el.charAt(0).toUpperCase() + el.slice(1)}
                  </Button>
                ))}
              </div>
            </div>

            {/* Options */}
            <div className="mb-8">
              <h3 className="text-sm text-gray-400 mb-3 tracking-widest">OPTIONS</h3>
              <div className="flex flex-col gap-3">
                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={animate}
                    onChange={(e) => setAnimate(e.target.checked)}
                    style={{ accentColor: colors.secondary }}
                    className="w-4 h-4"
                  />
                  <span>Animate Rotation</span>
                </label>
                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={showGrid}
                    onChange={(e) => setShowGrid(e.target.checked)}
                    style={{ accentColor: colors.secondary }}
                    className="w-4 h-4"
                  />
                  <span>Show Sacred Grid</span>
                </label>
              </div>
            </div>

            {/* Export Section */}
            <div className="mb-8">
              <h3 className="text-sm text-gray-400 mb-3 tracking-widest">EXPORT</h3>
              <div className="flex flex-col gap-3">
                <Button onClick={exportSVG}>Download SVG (Scalable)</Button>
                <div className="flex gap-2 flex-wrap">
                  <Button small onClick={() => exportPNG(1024)}>PNG 1024×1024</Button>
                  <Button small onClick={() => exportPNG(512)}>PNG 512×512</Button>
                  <Button small onClick={() => exportPNG(192)}>PNG 192×192</Button>
                  <Button small onClick={() => exportPNG(180)}>Apple Touch</Button>
                  <Button small onClick={() => exportPNG(32)}>Favicon 32</Button>
                  <Button small onClick={() => exportPNG(16)}>Favicon 16</Button>
                </div>
              </div>
            </div>

            {/* Symbolism Key */}
            <div className="bg-black/20 rounded-2xl p-5">
              <h3 className="text-sm text-gray-400 mb-3 tracking-widest">✧ ENCODED SYMBOLISM</h3>
              <ul className="text-xs leading-relaxed text-gray-300 space-y-1 pl-4">
                <li><strong>8-Pointed Star</strong>: Octagram - divine order</li>
                <li><strong>3 Rings</strong>: أسرار = 462 → 4+6+2 = 12 → 3</li>
                <li><strong>3 Dots</strong>: Trinity of body, soul, spirit</li>
                <li><strong>Center Eye</strong>: ع (Ayn) - source/spring</li>
                <li><strong>Rotating Layers</strong>: Planetary hours cycle</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Asset Preview Grid */}
        <div className="mt-16">
          <h2 className="text-2xl font-light tracking-widest mb-6 text-center">
            ASSET PREVIEWS
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* App Icon Preview */}
            <div className="bg-white/5 rounded-2xl p-6 text-center">
              <div 
                className="w-30 h-30 mx-auto mb-4 rounded-[27px] overflow-hidden shadow-xl"
                style={{
                  background: `linear-gradient(135deg, ${colors.primary}, ${colors.secondary})`
                }}
              >
                <div className="w-full h-full flex items-center justify-center">
                  <AsrarLogo size={80} element={element} mono={false} />
                </div>
              </div>
              <p className="text-xs text-gray-400">iOS App Icon</p>
            </div>

            {/* Social Card Preview */}
            <div className="bg-white/5 rounded-2xl p-6 text-center">
              <div className="w-full h-[105px] mx-auto mb-4 rounded-lg bg-gray-800 flex items-center justify-center gap-3 px-4">
                <AsrarLogo size={60} element={element} />
                <span 
                  className="text-xl font-semibold"
                  style={{
                    backgroundImage: `linear-gradient(135deg, ${colors.primary}, ${colors.tertiary})`,
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent'
                  }}
                >
                  Asrār
                </span>
              </div>
              <p className="text-xs text-gray-400">Social Preview</p>
            </div>

            {/* Favicon Preview */}
            <div className="bg-white/5 rounded-2xl p-6 text-center">
              <div className="flex items-center justify-center gap-4 mb-4">
                <div className="w-8 h-8 bg-gray-800 rounded flex items-center justify-center">
                  <AsrarLogo size={24} element={element} />
                </div>
                <div className="w-4 h-4 bg-gray-800 rounded-sm flex items-center justify-center">
                  <AsrarLogo size={12} element={element} />
                </div>
              </div>
              <p className="text-xs text-gray-400">Favicon Sizes</p>
            </div>

            {/* Light Mode Preview */}
            <div className="bg-white/5 rounded-2xl p-6 text-center">
              <div className="w-30 h-30 mx-auto mb-4 rounded-xl bg-gray-50 flex items-center justify-center">
                <AsrarLogo size={80} element={element} mono={true} />
              </div>
              <p className="text-xs text-gray-400">Light Mode</p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-16 text-center text-gray-500 text-xs">
          <p>asrar.app • ʿIlm al-Ḥurūf • Sacred Geometry</p>
          <p className="mt-2 opacity-60">
            Logo incorporates traditional Islamic numerology and letter mysticism
          </p>
        </div>
      </div>
    </div>
  );
};

export default AsrarLogoDesigner;
