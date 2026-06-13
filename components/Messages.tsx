'use client'

import { useState, useEffect, useRef } from 'react'

interface ChatMessage {
  id: string
  sender: string
  senderId: string
  text: string
  timestamp: string
  isOwn: boolean
  senderRole: string
  fileUrl?: string
  fileName?: string
}

interface Chat {
  id: string
  name: string
  role: string
  type: 'teacher' | 'student'
  lastMessage: string
  timestamp: string
  avatar: string
  isOnline: boolean
  messages: ChatMessage[]
}

const CHATS_DATA: Chat[] = [
  {
    id: 'dr-bilal',
    name: 'Dr. Muhammad Bilal Bashir',
    role: 'Instructor: Computer Science',
    type: 'teacher',
    lastMessage: 'Please review the project documentation...',
    timestamp: '10:45 AM',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCv5pCHK1FwHWeZR49JOsKdNr6juVUg1Iq92vKeMS7AoISwDd0nc1MBtxWE2Mx-L-lrpJzc3ohZGPeSVYSkKMX-guGEQdUHF84rzoOfVUba36wWDu137iDgD0jA2_OTcpSvogyiC7VVvRN3i9ZwCTuIrXlMwEx5U0igPh-W4GttOP7noo9hZ4AcE_8KXFJdS-OhN1wCs5H4jdFEzVr6j323En4-pWrXt2Fj6-I1GHNOLojCLXKSRwTauJEht7xSxs3B0iNP2Hufq9WS',
    isOnline: true,
    messages: [
      {
        id: '1',
        sender: 'Dr. Muhammad Bilal Bashir',
        senderId: 'dr-bilal',
        text: 'Hello Mahnoor, I\'ve reviewed your initial draft for the Database normalization project. You\'ve handled the 3NF transitions quite well.',
        timestamp: '09:12 AM',
        isOwn: false,
        senderRole: 'Instructor',
      },
      {
        id: '2',
        sender: 'You',
        senderId: 'self',
        text: 'Thank you, Dr. Bilal! I was a bit unsure about the junction table in the many-to-many relationship section. Did I address that correctly?',
        timestamp: '09:15 AM',
        isOwn: true,
        senderRole: 'Student',
      },
    ],
  },
  {
    id: 'iesha',
    name: 'Iesha Muneer',
    role: 'Classmate: Computer Science',
    type: 'student',
    lastMessage: 'Can we study together for the exam?',
    timestamp: 'Yesterday',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBdB6Z1tcs7kOImVnRD7yZhTnZCoIDmd6nshX2XG4V-GHDRRD5h1sKDh9WY364OG0xRpHOYfDVsjJKHeYFECO_WD0oAfa-NnzRuW8hWsIOdVBBEeQLjmU0pX0HZTpXZhI9dCi5zukVZnriouCPv435eqFCUQmJgNEA-EN0Ya31FwPWktfZLCLh4Zd9FlJX27-yYA02lIp-Ohy-Dutb3_fQYktFZPxKujkChQtP8tEnJjdpZdzT0-FYmRO3CL0rm3-IaJ5gzbvUPRV2F',
    isOnline: false,
    messages: [],
  },
  {
    id: 'fajar',
    name: 'Fajar Waseem',
    role: 'Classmate: Computer Science',
    type: 'student',
    lastMessage: 'Did you complete the assignment?',
    timestamp: 'Yesterday',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAivZDQlahdr5JDidAVf4x9xIobqgczv2phUHM5tpR5QrkaROZd10FarlMzCzbLUY57cR_ihVCqTQ_MQRWPaD8LRvzhfMllrDbZEC9c4Ff6q1dKuivrBF-ikNMbmEc_YbBhg7YSDmvLJxuuObAVc-x66Jt8h6awb0Xd4Eq9lHafh0WYYcKeeLVRNxTT7Uk2GJ0r8_HbRmQ9G5ap7WpgZfSV5Pe7heCmZMc7-chGm52Aawg4-lF2_VWgh3DPNhCkl0ByXrvzANT7O7ca',
    isOnline: false,
    messages: [],
  },
  {
    id: 'muneeb',
    name: 'Muneeb',
    role: 'Classmate: Computer Science',
    type: 'student',
    lastMessage: 'Got the notes, thanks!',
    timestamp: 'Oct 24',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDzzThfKf1KQXggdUWSQrPVBuD0PhdKtXRWi9QLzpUr70vhqEgu4E8J7bHs_7nmXJgl3IkaNxn35x7xY1pKu9sDon6kRNZtVwaKFnWn7gH7vs9EDg8MvC3s_EzOhCGqQYGEUH9mMSeGO-GuJkQQmgFYIbplEDtSK87cJcjKqYg1k5GKcBatL8RMrXgxrXLrqXRaTquOEoNNgNBzQv-spiOQTlMAbpDX6E4vUnsL98hNz602hPUuihHkFlcKc9RMZWV-Sqit-9ym2Oo9',
    isOnline: false,
    messages: [],
  },
  {
    id: 'nayab',
    name: 'Nayab',
    role: 'Classmate: Computer Science',
    type: 'student',
    lastMessage: 'See you at the library tomorrow?',
    timestamp: 'Oct 23',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAgOgvFOo8QDwCKiZ2Z154OpJ4z0FJKSO8FMf1tsYHD7Rwo7oDuWjnaGN3oJb3JUQppmTxJco7Q1SCbd3jYfTXyVIB46EznXcYwKLc-356vX6w8VpNsPe2H2SIhstOZrVWmrlpml81gt9ZgJ4LDA8X8LFT6Dyna04Ux19fjBR5MELPIIPIhAG9qcJJQC626-j_bc3ROnNshzTDcLtFXAufcsTg2mtGO0MV7tV0D-XHG17G7Q1uqN2kBd1caFcYOATHFNYQs8X3EHf3x',
    isOnline: false,
    messages: [],
  },
]

export default function Messages({ onSelectCourse }: { onSelectCourse?: (courseId: string) => void }) {
  const [selectedChat, setSelectedChat] = useState<Chat>(CHATS_DATA[0])
  const [filter, setFilter] = useState<'all' | 'teachers' | 'students'>('all')
  const [inputMessage, setInputMessage] = useState('')
  const [messages, setMessages] = useState<ChatMessage[]>(selectedChat.messages)
  const [simulationStarted, setSimulationStarted] = useState(false)
  const [showEmojiPicker, setShowEmojiPicker] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const EMOJIS = ['👍', '✅', '❌', '😊', '😢']

  const filteredChats = CHATS_DATA.filter(chat => {
    if (filter === 'teachers') return chat.type === 'teacher'
    if (filter === 'students') return chat.type === 'student'
    return true
  })

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  // Incoming message simulation
  useEffect(() => {
    if (simulationStarted) return

    setSimulationStarted(true)
    const timeouts: NodeJS.Timeout[] = []

    // 2 messages with 1 second gap from Dr. Muhammad Bilal Bashir
    const timeout1 = setTimeout(() => {
      const newMsg: ChatMessage = {
        id: Date.now().toString(),
        sender: 'Dr. Muhammad Bilal Bashir',
        senderId: 'dr-bilal',
        text: 'Yes, it looks solid. However, please review the project documentation I sent just now regarding the indexing strategies. We need that implemented in the final ERD.',
        timestamp: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }),
        isOwn: false,
        senderRole: 'Instructor',
      }
      setMessages(prev => [...prev, newMsg])
    }, 1000)
    timeouts.push(timeout1)

    const timeout2 = setTimeout(() => {
      const newMsg: ChatMessage = {
        id: Date.now().toString() + '1',
        sender: 'Dr. Muhammad Bilal Bashir',
        senderId: 'dr-bilal',
        text: 'Also, don\'t forget to attach the supporting documentation file.',
        timestamp: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }),
        isOwn: false,
        senderRole: 'Instructor',
      }
      setMessages(prev => [...prev, newMsg])
    }, 2000)
    timeouts.push(timeout2)

    // After 5 seconds, message from another chat (Iesha)
    const timeout3 = setTimeout(() => {
      const newMsg: ChatMessage = {
        id: Date.now().toString() + '2',
        sender: 'Iesha Muneer',
        senderId: 'iesha',
        text: 'Hey! Did you finish the assignment? Let\'s compare notes before submission.',
        timestamp: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }),
        isOwn: false,
        senderRole: 'Classmate',
      }
    }, 5000)
    timeouts.push(timeout3)

    // After 10 more seconds (15 total), message from Fajar
    const timeout4 = setTimeout(() => {
      const newMsg: ChatMessage = {
        id: Date.now().toString() + '3',
        sender: 'Fajar Waseem',
        senderId: 'fajar',
        text: 'The lab session was really helpful today. Thanks for explaining the concepts so clearly!',
        timestamp: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }),
        isOwn: false,
        senderRole: 'Classmate',
      }
    }, 15000)
    timeouts.push(timeout4)

    // After 5 more seconds (20 total), 3 messages from different chats
    const timeout5 = setTimeout(() => {
      const newMsgs: ChatMessage[] = [
        {
          id: Date.now().toString() + '4',
          sender: 'Muneeb',
          senderId: 'muneeb',
          text: 'Can you send me the code repository link?',
          timestamp: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }),
          isOwn: false,
          senderRole: 'Classmate',
        },
        {
          id: Date.now().toString() + '5',
          sender: 'Nayab',
          senderId: 'nayab',
          text: 'Yes, let\'s meet at the library tomorrow at 3 PM.',
          timestamp: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }),
          isOwn: false,
          senderRole: 'Classmate',
        },
        {
          id: Date.now().toString() + '6',
          sender: 'Dr. Muhammad Bilal Bashir',
          senderId: 'dr-bilal',
          text: 'Perfect! Submit it by EOD tomorrow.',
          timestamp: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }),
          isOwn: false,
          senderRole: 'Instructor',
        },
      ]
    }, 20000)
    timeouts.push(timeout5)

    return () => {
      timeouts.forEach(timeout => clearTimeout(timeout))
    }
  }, [simulationStarted])

  const handleSelectChat = (chat: Chat) => {
    setSelectedChat(chat)
    setMessages(chat.messages)
  }

  const handleSendMessage = () => {
    if (!inputMessage.trim()) return

    const newMsg: ChatMessage = {
      id: Date.now().toString(),
      sender: 'You',
      senderId: 'self',
      text: inputMessage,
      timestamp: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }),
      isOwn: true,
      senderRole: 'Student',
    }

    setMessages(prev => [...prev, newMsg])
    setInputMessage('')
  }

  const handleSendEmoji = (emoji: string) => {
    const newMsg: ChatMessage = {
      id: Date.now().toString(),
      sender: 'You',
      senderId: 'self',
      text: emoji,
      timestamp: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }),
      isOwn: true,
      senderRole: 'Student',
    }

    setMessages(prev => [...prev, newMsg])
    setShowEmojiPicker(false)
  }

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (!file) return

    // Create a mock file message
    const newMsg: ChatMessage = {
      id: Date.now().toString(),
      sender: 'You',
      senderId: 'self',
      text: `Sent a file: ${file.name}`,
      fileName: file.name,
      timestamp: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }),
      isOwn: true,
      senderRole: 'Student',
    }

    setMessages(prev => [...prev, newMsg])
    if (fileInputRef.current) fileInputRef.current.value = ''
  }

  const handleFileButtonClick = () => {
    fileInputRef.current?.click()
  }

  return (
    <div className="flex h-full w-full bg-surface">
      {/* Left Chat List */}
      <div className="w-80 bg-surface-container-low flex flex-col border-r border-outline-variant/10">
        <div className="p-6 border-b border-outline-variant/10">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-bold text-primary">Inboxes</h3>
            <button className="p-2 hover:bg-surface-container-high rounded-full transition-colors">
              <span className="material-symbols-outlined text-primary">edit_square</span>
            </button>
          </div>
          <div className="flex gap-2 mb-4">
            <button
              onClick={() => setFilter('all')}
              className={`px-4 py-1.5 rounded-full text-[10px] font-bold whitespace-nowrap transition-colors ${
                filter === 'all'
                  ? 'bg-primary text-white'
                  : 'bg-surface-container-highest text-on-surface-variant hover:bg-surface-container-high'
              }`}
            >
              All
            </button>
            <button
              onClick={() => setFilter('teachers')}
              className={`px-4 py-1.5 rounded-full text-[10px] font-bold whitespace-nowrap transition-colors ${
                filter === 'teachers'
                  ? 'bg-primary text-white'
                  : 'bg-surface-container-highest text-on-surface-variant hover:bg-surface-container-high'
              }`}
            >
              Teachers
            </button>
            <button
              onClick={() => setFilter('students')}
              className={`px-4 py-1.5 rounded-full text-[10px] font-bold whitespace-nowrap transition-colors ${
                filter === 'students'
                  ? 'bg-primary text-white'
                  : 'bg-surface-container-highest text-on-surface-variant hover:bg-surface-container-high'
              }`}
            >
              Students
            </button>
          </div>
        </div>

        {/* Chat List */}
        <div className="flex-grow overflow-y-auto px-3 pb-6">
          {filteredChats.map(chat => (
            <button
              key={chat.id}
              onClick={() => handleSelectChat(chat)}
              className={`w-full p-4 mb-2 rounded-2xl transition-all text-left ${
                selectedChat.id === chat.id
                  ? 'bg-surface-container-lowest shadow-sm border-l-4 border-primary'
                  : 'hover:bg-surface-container-high'
              }`}
            >
              <div className="flex gap-3">
                <div className="relative">
                  <img
                    alt={chat.name}
                    src={chat.avatar}
                    className="w-12 h-12 rounded-xl object-cover"
                  />
                  {chat.isOnline && (
                    <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-surface-container-lowest rounded-full"></span>
                  )}
                </div>
                <div className="flex-grow overflow-hidden">
                  <div className="flex justify-between items-start">
                    <h4 className="font-bold text-sm truncate">{chat.name}</h4>
                    <span className="text-[10px] text-outline">{chat.timestamp}</span>
                  </div>
                  <p className="text-[10px] text-primary font-semibold">{chat.role}</p>
                  <p className="text-xs text-on-surface-variant truncate mt-1">{chat.lastMessage}</p>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Right Chat Window */}
      <div className="flex-grow flex flex-col bg-surface">
        {/* Chat Header */}
        <div className="px-8 py-5 flex justify-between items-center bg-surface-container-lowest shadow-sm border-b border-outline-variant/10">
          <div className="flex items-center gap-4">
            <div className="relative">
              <img
                alt={selectedChat.name}
                src={selectedChat.avatar}
                className="w-12 h-12 rounded-xl object-cover"
              />
              {selectedChat.isOnline && (
                <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-surface-container-lowest rounded-full"></span>
              )}
            </div>
            <div>
              <h3 className="font-bold text-on-surface">{selectedChat.name}</h3>
              <div className="flex items-center gap-1.5">
                {selectedChat.isOnline && <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>}
                <p className="text-[10px] text-on-surface-variant font-medium">
                  {selectedChat.isOnline ? 'Online' : 'Offline'} • {selectedChat.role}
                </p>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button className="p-2.5 hover:bg-surface-container-high rounded-xl text-on-surface-variant transition-all">
              <span className="material-symbols-outlined">videocam</span>
            </button>
            <button className="p-2.5 hover:bg-surface-container-high rounded-xl text-on-surface-variant transition-all">
              <span className="material-symbols-outlined">call</span>
            </button>
            <button className="p-2.5 hover:bg-surface-container-high rounded-xl text-on-surface-variant transition-all">
              <span className="material-symbols-outlined">info</span>
            </button>
          </div>
        </div>

        {/* Messages Area */}
        <div className="flex-grow overflow-y-auto px-8 py-6 space-y-6">
          {messages.length === 0 ? (
            <div className="flex items-center justify-center h-full text-center">
              <div>
                <p className="text-on-surface-variant mb-2">No messages yet</p>
                <p className="text-xs text-outline">Start the conversation!</p>
              </div>
            </div>
          ) : (
            <>
              <div className="text-center text-xs text-on-surface-variant font-medium">YESTERDAY</div>
              {messages.map((msg, index) => (
                <div key={msg.id} className={`flex ${msg.isOwn ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-md ${msg.isOwn ? 'bg-primary text-white' : 'bg-surface-container-low text-on-surface'} px-6 py-3 rounded-3xl`}>
                    {msg.fileName ? (
                      <div className="flex items-center gap-3">
                        <span className="material-symbols-outlined text-xl">description</span>
                        <div>
                          <p className="text-sm font-medium">{msg.fileName}</p>
                          <p className="text-xs opacity-75">1.2 MB • PDF Document</p>
                        </div>
                        <span className="material-symbols-outlined text-xl ml-2">download</span>
                      </div>
                    ) : (
                      <p className="text-sm leading-relaxed">{msg.text}</p>
                    )}
                    <p className={`text-xs mt-2 ${msg.isOwn ? 'text-blue-100' : 'text-on-surface-variant'}`}>{msg.timestamp}</p>
                  </div>
                </div>
              ))}
              <div className="text-center text-xs text-on-surface-variant font-medium">TODAY</div>
              <div ref={messagesEndRef} />
            </>
          )}
        </div>

        {/* Message Input */}
        <div className="px-8 py-6 bg-surface-container-lowest border-t border-outline-variant/10">
          <div className="flex items-end gap-4">
            {/* File Upload Button */}
            <button 
              onClick={handleFileButtonClick}
              className="p-2 hover:bg-surface-container-high rounded-full text-on-surface-variant transition-all"
            >
              <span className="material-symbols-outlined">add</span>
            </button>
            <input
              ref={fileInputRef}
              type="file"
              onChange={handleFileSelect}
              className="hidden"
            />

            {/* Emoji Picker Button */}
            <div className="relative">
              <button 
                onClick={() => setShowEmojiPicker(!showEmojiPicker)}
                className="p-2 hover:bg-surface-container-high rounded-full text-on-surface-variant transition-all"
              >
                <span className="material-symbols-outlined">mood</span>
              </button>
              
              {/* Emoji Picker Popup */}
              {showEmojiPicker && (
                <div className="absolute bottom-12 left-0 bg-white rounded-2xl shadow-lg border border-outline-variant/20 p-3 flex gap-2 z-50">
                  {EMOJIS.map((emoji) => (
                    <button
                      key={emoji}
                      onClick={() => handleSendEmoji(emoji)}
                      className="text-2xl hover:scale-125 transition-transform hover:bg-surface-container-high rounded-lg p-1"
                    >
                      {emoji}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Message Input */}
            <div className="flex-grow relative">
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                placeholder="Type your message here..."
                className="w-full bg-surface-container-low border-none rounded-full px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
              />
            </div>

            {/* Send Button - Perfect Circle */}
            <button
              onClick={handleSendMessage}
              className="w-12 h-12 bg-primary text-white rounded-full hover:bg-primary/90 transition-all flex items-center justify-center flex-shrink-0"
            >
              <span className="material-symbols-outlined text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>
                send
              </span>
            </button>
          </div>
          <div className="flex items-center gap-2 mt-2 text-[10px] text-on-surface-variant">
            <span>Press Enter to send, Shift + Enter for new line</span>
          </div>
        </div>
      </div>
    </div>
  )
}
