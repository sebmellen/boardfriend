"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { 
  Search, 
  Filter, 
  MoreHorizontal, 
  TrendingUp, 
  Target, 
  Clock, 
  CheckCircle,
  XCircle,
  Circle,
  ChevronDown,
  Settings,
  User,
  LogOut,
  BookOpen,
  BarChart3,
  Calendar,
  Brain
} from "lucide-react"

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState("qbank")

  // Mock data for demonstration
  const stats = {
    totalQuestions: 1247,
    correct: 892,
    incorrect: 355,
    averageScore: 71.5,
    timeSpent: "24h 32m",
    streak: 7
  }

  const questions = [
    {
      id: 1,
      source: "UWorld",
      subject: "Cardiology",
      topic: "Heart Failure",
      difficulty: "Medium",
      status: "correct",
      dateAttempted: "2024-01-15",
      timeSpent: "2m 34s",
      confidence: "High"
    },
    {
      id: 2,
      source: "Amboss",
      subject: "Pulmonology",
      topic: "COPD",
      difficulty: "Hard",
      status: "incorrect",
      dateAttempted: "2024-01-15",
      timeSpent: "4m 12s",
      confidence: "Low"
    },
    {
      id: 3,
      source: "TrueLearn",
      subject: "Nephrology",
      topic: "Acute Kidney Injury",
      difficulty: "Easy",
      status: "correct",
      dateAttempted: "2024-01-14",
      timeSpent: "1m 45s",
      confidence: "Medium"
    },
    {
      id: 4,
      source: "UWorld",
      subject: "Endocrinology",
      topic: "Diabetes Management",
      difficulty: "Medium",
      status: "flagged",
      dateAttempted: "2024-01-14",
      timeSpent: "3m 21s",
      confidence: "Medium"
    },
    {
      id: 5,
      source: "Amboss",
      subject: "Gastroenterology",
      topic: "IBD",
      difficulty: "Hard",
      status: "incorrect",
      dateAttempted: "2024-01-13",
      timeSpent: "5m 07s",
      confidence: "Low"
    }
  ]

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'correct':
        return <CheckCircle className="w-4 h-4 text-emerald-600" />
      case 'incorrect':
        return <XCircle className="w-4 h-4 text-red-600" />
      case 'flagged':
        return <Circle className="w-4 h-4 text-amber-600" />
      default:
        return <Circle className="w-4 h-4 text-gray-400" />
    }
  }

  const getSourceBadgeColor = (source: string) => {
    switch (source) {
      case 'UWorld':
        return 'bg-blue-50 text-blue-700 border-blue-200'
      case 'Amboss':
        return 'bg-purple-50 text-purple-700 border-purple-200'
      case 'TrueLearn':
        return 'bg-green-50 text-green-700 border-green-200'
      default:
        return 'bg-gray-50 text-gray-700 border-gray-200'
    }
  }

  const tabs = [
    { id: "overview", label: "Overview", icon: BarChart3 },
    { id: "qbank", label: "QBank", icon: BookOpen },
    { id: "analytics", label: "Analytics", icon: TrendingUp },
    { id: "study-plan", label: "Study Plan", icon: Calendar },
    { id: "ai-tutor", label: "AI Tutor", icon: Brain }
  ]

  const renderQBankContent = () => (
    <div>
      {/* QBank Statistics */}
      <div className="mb-8">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-6 mb-8">
          <div className="text-center">
            <div className="text-2xl font-light text-gray-900 mb-1">{stats.totalQuestions}</div>
            <div className="text-sm text-gray-500">Total Questions</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-light text-emerald-600 mb-1">{stats.correct}</div>
            <div className="text-sm text-gray-500">Correct</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-light text-red-600 mb-1">{stats.incorrect}</div>
            <div className="text-sm text-gray-500">Incorrect</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-light text-gray-900 mb-1">{stats.averageScore}%</div>
            <div className="text-sm text-gray-500">Average Score</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-light text-gray-900 mb-1">{stats.timeSpent}</div>
            <div className="text-sm text-gray-500">Time Spent</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-light text-[#E55039] mb-1">{stats.streak}</div>
            <div className="text-sm text-gray-500">Day Streak</div>
          </div>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="mb-6">
        <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
          <div className="flex-1 max-w-md">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              <Input 
                placeholder="Search questions, topics, or subjects..."
                className="pl-10 border-gray-200 focus:border-gray-300"
              />
            </div>
          </div>
          
          <div className="flex items-center space-x-3">
            <Button variant="outline" size="sm" className="border-gray-200 text-gray-700">
              <Filter className="w-4 h-4 mr-2" />
              Filter
              <ChevronDown className="w-4 h-4 ml-2" />
            </Button>
            <Button variant="outline" size="sm" className="border-gray-200 text-gray-700">
              Source
              <ChevronDown className="w-4 h-4 ml-2" />
            </Button>
            <Button variant="outline" size="sm" className="border-gray-200 text-gray-700">
              Subject
              <ChevronDown className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </div>

      {/* Questions Table */}
      <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="text-left py-3 px-4 text-sm font-medium text-gray-500 tracking-wide uppercase">Status</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-gray-500 tracking-wide uppercase">Source</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-gray-500 tracking-wide uppercase">Subject</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-gray-500 tracking-wide uppercase">Topic</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-gray-500 tracking-wide uppercase">Difficulty</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-gray-500 tracking-wide uppercase">Date</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-gray-500 tracking-wide uppercase">Time</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-gray-500 tracking-wide uppercase">Confidence</th>
                <th className="w-8"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {questions.map((question) => (
                <tr key={question.id} className="hover:bg-gray-50 transition-colors cursor-pointer">
                  <td className="py-4 px-4">
                    {getStatusIcon(question.status)}
                  </td>
                  <td className="py-4 px-4">
                    <Badge variant="outline" className={`text-xs ${getSourceBadgeColor(question.source)}`}>
                      {question.source}
                    </Badge>
                  </td>
                  <td className="py-4 px-4 text-sm text-gray-900">{question.subject}</td>
                  <td className="py-4 px-4 text-sm text-gray-600">{question.topic}</td>
                  <td className="py-4 px-4">
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      question.difficulty === 'Easy' ? 'bg-green-100 text-green-700' :
                      question.difficulty === 'Medium' ? 'bg-yellow-100 text-yellow-700' :
                      'bg-red-100 text-red-700'
                    }`}>
                      {question.difficulty}
                    </span>
                  </td>
                  <td className="py-4 px-4 text-sm text-gray-500">{question.dateAttempted}</td>
                  <td className="py-4 px-4 text-sm text-gray-500">{question.timeSpent}</td>
                  <td className="py-4 px-4">
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      question.confidence === 'High' ? 'bg-emerald-100 text-emerald-700' :
                      question.confidence === 'Medium' ? 'bg-amber-100 text-amber-700' :
                      'bg-red-100 text-red-700'
                    }`}>
                      {question.confidence}
                    </span>
                  </td>
                  <td className="py-4 px-4">
                    <Button variant="ghost" size="sm">
                      <MoreHorizontal className="w-4 h-4" />
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Pagination */}
      <div className="mt-6 flex items-center justify-between">
        <div className="text-sm text-gray-500">
          Showing 1-5 of 1,247 questions
        </div>
        <div className="flex items-center space-x-2">
          <Button variant="outline" size="sm" className="border-gray-200 text-gray-700">
            Previous
          </Button>
          <Button variant="outline" size="sm" className="border-gray-200 text-gray-700">
            Next
          </Button>
        </div>
      </div>
    </div>
  )

  const renderTabContent = () => {
    switch (activeTab) {
      case "qbank":
        return renderQBankContent()
      case "overview":
        return (
          <div className="text-center py-24">
            <h2 className="text-2xl font-light text-gray-900 mb-4">Dashboard Overview</h2>
            <p className="text-gray-600">Coming soon - Your personalized study dashboard</p>
          </div>
        )
      case "analytics":
        return (
          <div className="text-center py-24">
            <h2 className="text-2xl font-light text-gray-900 mb-4">Performance Analytics</h2>
            <p className="text-gray-600">Coming soon - Detailed performance insights and predictions</p>
          </div>
        )
      case "study-plan":
        return (
          <div className="text-center py-24">
            <h2 className="text-2xl font-light text-gray-900 mb-4">Study Plan</h2>
            <p className="text-gray-600">Coming soon - AI-optimized study schedules</p>
          </div>
        )
      case "ai-tutor":
        return (
          <div className="text-center py-24">
            <h2 className="text-2xl font-light text-gray-900 mb-4">AI Tutor</h2>
            <p className="text-gray-600">Coming soon - Personalized AI tutoring sessions</p>
          </div>
        )
      default:
        return renderQBankContent()
    }
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-100 bg-white">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-light tracking-tight text-gray-900">
              Board<span className="text-[#E55039]">Friend</span>
            </div>
            
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm">
                <Settings className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="sm">
                <User className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="sm">
                <LogOut className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation Tabs */}
      <nav className="border-b border-gray-100 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex space-x-8">
            {tabs.map((tab) => {
              const Icon = tab.icon
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center space-x-2 py-4 px-1 border-b-2 text-sm font-medium transition-colors ${
                    activeTab === tab.id
                      ? 'border-[#E55039] text-[#E55039]'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-[#F5C4B0]'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{tab.label}</span>
                </button>
              )
            })}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-8">
        {renderTabContent()}
      </main>
    </div>
  )
}