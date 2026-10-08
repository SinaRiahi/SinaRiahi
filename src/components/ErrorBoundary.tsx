import { Component, ErrorInfo, ReactNode } from 'react';
import { AlertTriangle, RefreshCw, Home, Copy, Check, ChevronDown, ChevronUp, Terminal, ShieldAlert } from 'lucide-react';

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
  errorInfo: ErrorInfo | null;
  copied: boolean;
  showDetails: boolean;
}

export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null,
      copied: false,
      showDetails: false,
    };
  }

  static getDerivedStateFromError(error: Error): Partial<ErrorBoundaryState> {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    this.setState({ errorInfo });
    console.error('System Exception Caught by ErrorBoundary:', error, errorInfo);
  }

  handleReload = () => {
    window.location.reload();
  };

  handleReset = () => {
    this.setState({
      hasError: false,
      error: null,
      errorInfo: null,
      copied: false,
      showDetails: false,
    });
    window.location.href = '/#home';
  };

  handleCopyDiagnostics = () => {
    const diagnosticPayload = [
      `=== SINA RIAHI PORTFOLIO - SYSTEM FAULT REPORT ===`,
      `Timestamp: ${new Date().toISOString()}`,
      `User Agent: ${navigator.userAgent}`,
      `URL: ${window.location.href}`,
      `Error Name: ${this.state.error?.name || 'UnknownError'}`,
      `Error Message: ${this.state.error?.message || 'No message provided'}`,
      `Stack Trace:`,
      this.state.error?.stack || 'No stack trace available',
      `Component Stack:`,
      this.state.errorInfo?.componentStack || 'No component stack available',
      `================================================`,
    ].join('\n');

    navigator.clipboard.writeText(diagnosticPayload).then(() => {
      this.setState({ copied: true });
      setTimeout(() => this.setState({ copied: false }), 2500);
    }).catch(() => {});
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen w-full bg-[#08090D] text-slate-100 flex items-center justify-center p-4 sm:p-6 relative overflow-hidden select-none">
          {/* Cybernetic ambient lighting */}
          <div className="absolute top-1/4 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[400px] bg-rose-600/10 rounded-full blur-[140px] pointer-events-none" />
          <div className="absolute bottom-1/4 right-1/3 w-[450px] h-[400px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />

          {/* Radial grid background */}
          <div
            className="absolute inset-0 opacity-[0.05] pointer-events-none"
            style={{
              backgroundImage: 'radial-gradient(circle, #38bdf8 1px, transparent 1px)',
              backgroundSize: '28px 28px',
            }}
          />

          <div className="relative z-10 max-w-2xl w-full bg-[#0c101a]/95 border border-rose-500/30 rounded-2xl p-6 sm:p-8 shadow-2xl backdrop-blur-xl space-y-6">
            
            {/* Header Badge & Error Code */}
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-4">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-rose-500/10 border border-rose-500/30 flex items-center justify-center text-rose-400">
                  <ShieldAlert className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[11px] font-mono font-bold tracking-widest text-rose-400 uppercase">
                    Kernel Fault Intercepted
                  </div>
                  <div className="text-xs font-mono text-slate-400">
                    Status: <span className="text-white font-semibold">500 / RUNTIME_PANIC</span>
                  </div>
                </div>
              </div>

              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-rose-950/60 border border-rose-800/40 text-[10px] font-mono text-rose-300">
                <span className="w-1.5 h-1.5 rounded-full bg-rose-500 animate-ping" />
                <span>Fail-Safe Active</span>
              </span>
            </div>

            {/* Error Editorial Headline */}
            <div className="space-y-2">
              <h1 className="text-xl sm:text-2xl font-extrabold tracking-tight text-white flex items-center gap-2">
                <span>The runtime encountered an unexpected fault</span>
              </h1>
              <p className="text-sm text-slate-300 leading-relaxed font-normal">
                An unhandled execution exception was caught in the application pipeline. System memory has been isolated to prevent cascade failures.
              </p>
            </div>

            {/* Monospace Error Summary Card */}
            <div className="p-4 rounded-xl bg-black/60 border border-white/10 space-y-2 font-mono text-xs">
              <div className="flex items-center justify-between text-slate-400 text-[11px] border-b border-white/5 pb-1.5">
                <span className="flex items-center gap-1.5 text-rose-400 font-semibold">
                  <AlertTriangle className="w-3.5 h-3.5" />
                  <span>Exception Message</span>
                </span>
                <span className="text-[10px] text-slate-500">Thread: main</span>
              </div>
              <p className="text-rose-200/90 break-words font-medium select-text">
                {this.state.error?.message || 'An unknown exception disrupted normal operations.'}
              </p>
            </div>

            {/* Collapsible Technical Diagnostics */}
            <div className="border border-white/10 rounded-xl overflow-hidden bg-black/40">
              <button
                onClick={() => this.setState((prev) => ({ showDetails: !prev.showDetails }))}
                className="w-full px-4 py-2.5 flex items-center justify-between text-xs font-mono text-slate-400 hover:text-slate-200 hover:bg-white/[0.02] transition-colors"
                type="button"
              >
                <span className="flex items-center gap-2">
                  <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Technical Diagnostics & Call Stack</span>
                </span>
                {this.state.showDetails ? (
                  <ChevronUp className="w-4 h-4 text-slate-500" />
                ) : (
                  <ChevronDown className="w-4 h-4 text-slate-500" />
                )}
              </button>

              {this.state.showDetails && (
                <div className="p-4 border-t border-white/10 space-y-3 font-mono text-[11px] text-slate-400 select-text max-h-60 overflow-y-auto">
                  {this.state.error?.stack && (
                    <div>
                      <div className="text-[10px] text-cyan-400 font-semibold mb-1">Stack Trace:</div>
                      <pre className="text-slate-300 text-[10px] whitespace-pre-wrap leading-relaxed bg-black/50 p-2.5 rounded-lg border border-white/5 overflow-x-auto">
                        {this.state.error.stack}
                      </pre>
                    </div>
                  )}

                  {this.state.errorInfo?.componentStack && (
                    <div>
                      <div className="text-[10px] text-cyan-400 font-semibold mb-1">Component Hierarchy:</div>
                      <pre className="text-slate-300 text-[10px] whitespace-pre-wrap leading-relaxed bg-black/50 p-2.5 rounded-lg border border-white/5 overflow-x-auto">
                        {this.state.errorInfo.componentStack}
                      </pre>
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Action Bar */}
            <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
              <div className="flex items-center gap-2 w-full sm:w-auto">
                <button
                  onClick={this.handleReload}
                  className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 active:bg-blue-700 text-white text-xs font-semibold shadow-sm shadow-blue-500/20 transition-all"
                  type="button"
                >
                  <RefreshCw className="w-3.5 h-3.5" />
                  <span>Re-initialize Kernel</span>
                </button>

                <button
                  onClick={this.handleReset}
                  className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 active:bg-white/[0.15] border border-white/10 text-slate-200 text-xs font-semibold transition-all"
                  type="button"
                >
                  <Home className="w-3.5 h-3.5" />
                  <span>Return to Home</span>
                </button>
              </div>

              <button
                onClick={this.handleCopyDiagnostics}
                className="inline-flex items-center gap-2 px-3.5 py-2.5 rounded-xl bg-white/[0.03] hover:bg-white/10 border border-white/10 text-slate-400 hover:text-white text-xs font-mono transition-colors"
                type="button"
                title="Copy telemetry report to clipboard"
              >
                {this.state.copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-400">Telemetry Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy Telemetry</span>
                  </>
                )}
              </button>
            </div>

          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
