import React, { useState } from 'react';
import { 
  Bot, 
  Brain, 
  Settings, 
  Search, 
  Zap, 
  Activity, 
  ChevronRight,
  Play,
  Pause,
  BarChart3,
  Shield,
  Database
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const AIAgentDashboard = () => {
  const [selectedEnvironment, setSelectedEnvironment] = useState('PROD');
  const [selectedDepartment, setSelectedDepartment] = useState('');
  const [analysisText, setAnalysisText] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const handleAnalysis = () => {
    setIsAnalyzing(true);
    // 模拟分析过程
    setTimeout(() => {
      setIsAnalyzing(false);
    }, 3000);
  };

  const analysisSteps = [
    { title: '推理阶段', subtitle: '确认部门配置和问题理解', status: 'completed' },
    { title: '行动阶段', subtitle: '生成动态能力声明', status: 'current' },
    { title: '问题分析', subtitle: '智能分析问题并匹配服务', status: 'pending' },
    { title: '策略制定', subtitle: '制定动态查询策略', status: 'pending' },
    { title: '查询执行', subtitle: '执行日志查询', status: 'pending' }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* 顶部导航栏 */}
      <header className="border-b border-border bg-white/80 backdrop-blur-sm shadow-sm">
        <div className="flex items-center justify-between px-6 py-4">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-gradient-to-r from-primary to-accent rounded-lg">
              <Bot className="h-6 w-6 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-xl font-bold">Dynamic Log Agent</h1>
              <p className="text-sm text-muted-foreground">智能日志分析平台</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Badge variant="outline" className="bg-accent/20 text-accent border-accent/30">
              <Activity className="h-3 w-3 mr-1" />
              系统运行正常
            </Badge>
            <Badge className="bg-destructive/20 text-destructive border-destructive/30">
              PROD
            </Badge>
            <Button size="sm" className="btn-tech">
              <Settings className="h-4 w-4 mr-2" />
              管理平台
            </Button>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* 左侧边栏 */}
        <aside className="w-80 border-r border-border bg-muted/30 backdrop-blur-sm animate-slide-in-left">
          <div className="p-6 space-y-6">
            {/* 环境配置 */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Settings className="h-5 w-5 text-primary" />
                <h3 className="font-semibold">环境配置</h3>
              </div>
              
              <div className="space-y-3">
                <div>
                  <label className="text-sm text-muted-foreground mb-3 block">选择环境</label>
                  <div className="grid grid-cols-3 gap-2">
                    {['PROD', 'UAT', 'FAT'].map((env) => (
                      <Button
                        key={env}
                        variant={selectedEnvironment === env ? "default" : "outline"}
                        size="sm"
                        onClick={() => setSelectedEnvironment(env)}
                        className={`transition-all duration-200 ${
                          selectedEnvironment === env 
                            ? 'bg-primary text-primary-foreground shadow-[var(--shadow-tech)]' 
                            : 'hover:bg-primary/10 hover:border-primary/50'
                        }`}
                      >
                        {env}
                      </Button>
                    ))}
                  </div>
                </div>
                
                <div>
                  <label className="text-sm text-muted-foreground mb-2 block">选择部门</label>
                  <select 
                    value={selectedDepartment}
                    onChange={(e) => setSelectedDepartment(e.target.value)}
                    className="input-tech w-full"
                  >
                    <option value="">请选择部门...</option>
                    <option>技术部</option>
                    <option>产品部</option>
                    <option>运营部</option>
                  </select>
                </div>
              </div>
            </div>

            {/* 快捷功能 */}
            <div className="space-y-4">
              <h3 className="font-semibold flex items-center">
                <Zap className="h-5 w-5 text-accent mr-2" />
                快捷功能
              </h3>
              <div className="space-y-2">
                {[
                  { icon: BarChart3, label: '性能监控', color: 'text-primary' },
                  { icon: Shield, label: '安全分析', color: 'text-accent' },
                  { icon: Database, label: '数据查询', color: 'text-secondary' }
                ].map((item, index) => (
                  <Button 
                    key={index}
                    variant="ghost" 
                    className="w-full justify-start hover:bg-primary/10 hover:text-primary transition-colors"
                  >
                    <item.icon className={`h-4 w-4 mr-3 ${item.color}`} />
                    {item.label}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </aside>

        {/* 主要内容区域 */}
        <main className="flex-1 p-6 space-y-6">
          {/* 智能问题分析卡片 */}
          <Card className="card-tech animate-fade-in-up">
            <CardHeader>
              <CardTitle className="flex items-center space-x-3">
                <Search className="h-6 w-6 text-primary" />
                <span>智能问题分析</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="text-sm text-muted-foreground mb-2 block">问题描述</label>
                <textarea
                  value={analysisText}
                  onChange={(e) => setAnalysisText(e.target.value)}
                  placeholder="请详细描述您遇到的日志问题，例如：
• 这个策略投放出现问题：37675，就是生产环境下午4点左右，这个用户uid=test611 看不到广告
• 今天上午10点左右，系统出现大量错误，用户反馈无法正常访问
• 策略12345的日志显示报错，影响了广告投放效果"
                  className="input-tech w-full h-32 resize-none"
                />
              </div>
              
              <Button 
                onClick={handleAnalysis}
                disabled={!analysisText.trim() || isAnalyzing}
                className="btn-tech w-full"
              >
                {isAnalyzing ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                    分析中...
                  </>
                ) : (
                  <>
                    <Brain className="h-4 w-4 mr-2" />
                    开始智能分析
                  </>
                )}
              </Button>
            </CardContent>
          </Card>

          {/* 分析结果展示 */}
          {(isAnalyzing || analysisText) && (
            <Card className="card-tech animate-fade-in-up">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3">
                  <Activity className="h-6 w-6 text-accent animate-glow-pulse" />
                  <span>分析结果</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                {isAnalyzing ? (
                  <div className="space-y-4">
                    <div className="h-4 bg-muted rounded animate-pulse"></div>
                    <div className="h-4 bg-muted rounded animate-pulse w-3/4"></div>
                    <div className="h-4 bg-muted rounded animate-pulse w-1/2"></div>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <div className="p-4 bg-primary/10 border border-primary/20 rounded-lg">
                      <h4 className="font-semibold text-primary mb-2">AI 分析建议</h4>
                      <p className="text-sm">基于您的问题描述，系统建议检查以下几个方面...</p>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          )}
        </main>

        {/* 右侧分析流程面板 */}
        <aside className="w-80 border-l border-border bg-muted/30 backdrop-blur-sm animate-slide-in-right">
          <div className="p-6 space-y-6">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-accent/20 rounded-lg">
                <Brain className="h-5 w-5 text-accent" />
              </div>
              <div>
                <h3 className="font-semibold">ReAct 分析流程</h3>
                <p className="text-sm text-muted-foreground">等待开始分析...</p>
              </div>
            </div>

            <div className="space-y-4">
              {analysisSteps.map((step, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${
                    step.status === 'completed' 
                      ? 'bg-accent text-accent-foreground' 
                      : step.status === 'current' 
                      ? 'bg-primary text-primary-foreground animate-glow-pulse' 
                      : 'bg-muted text-muted-foreground'
                  }`}>
                    {step.status === 'completed' ? (
                      <div className="w-3 h-3 bg-current rounded-full"></div>
                    ) : step.status === 'current' ? (
                      <Play className="h-3 w-3" />
                    ) : (
                      <Pause className="h-3 w-3" />
                    )}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-medium text-sm">{step.title}</h4>
                    <p className="text-xs text-muted-foreground">{step.subtitle}</p>
                  </div>
                  {step.status === 'current' && (
                    <ChevronRight className="h-4 w-4 text-primary animate-pulse" />
                  )}
                </div>
              ))}
            </div>

            <div className="p-4 bg-muted/50 rounded-lg">
              <h4 className="font-medium text-sm mb-2">系统状态</h4>
              <div className="space-y-2 text-xs">
                <div className="flex justify-between">
                  <span>CPU 使用率</span>
                  <span className="text-accent">23%</span>
                </div>
                <div className="flex justify-between">
                  <span>内存使用率</span>
                  <span className="text-primary">67%</span>
                </div>
                <div className="flex justify-between">
                  <span>活跃连接</span>
                  <span className="text-foreground">1,247</span>
                </div>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default AIAgentDashboard;