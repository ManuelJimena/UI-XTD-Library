import React, { useState } from 'react'
import Header from '@/components/Header/Header'
import Sidebar from '@/components/Sidebar/Sidebar'
import developer from '@/data/developer'
import Button from '@/components/Button/Viewer'
import Spinner from '@/components/Spinner/Viewer'
import Toggle from '@/components/Toggle/Viewer'
import ProgressMarker from '@/components/ProgressMarker/Viewer'
import { useResponsiveSidebar } from '@/hooks/useResponsiveSidebar'

const App = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useResponsiveSidebar()
  const [selectedComponent, setSelectedComponent] = useState(null)
  const components = [
    { id: 'Button', name: 'Buttons', component: Button },
    { id: 'Spinner', name: 'Spinners', component: Spinner },
    { id: 'Toggle', name: 'Toggles', component: Toggle },
    { id: 'ProgressMarker', name: '🚧 In progress 🚧', component: ProgressMarker }
  ]

  const handleSelectComponent = (componentId) => {
    const component = components.find(c => c.id === componentId)
    setSelectedComponent(component)
    setIsSidebarOpen(false)
  }

  return (
    <>
      <Header
        developer={developer}
        toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)}
        isSidebarOpen={isSidebarOpen}
      />
      <div style={{ display: 'flex', minHeight: '100vh', paddingTop: '50px' }}>
        <Sidebar
          isVisible={isSidebarOpen}
          components={components}
          onSelectComponent={handleSelectComponent}
        />
        <div style={{ flex: 1, padding: '50px 30px' }}>
          {selectedComponent && selectedComponent.component ? React.createElement(selectedComponent.component) : <div>No component selected</div>}
        </div>
      </div>
    </>
  )
}

export default App
