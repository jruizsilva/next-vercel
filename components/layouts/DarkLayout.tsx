interface Props {
  children: JSX.Element | JSX.Element[]
}

export const DarkLayout = ({ children }: Props) => {
  return (
    <div
      style={{
        backgroundColor: 'rgba(255,255,255,0.1)',
        borderRadius: '5px',
        padding: '10px',
        maxWidth: '640px',
        margin: 'auto',
        textAlign: 'center'
      }}
    >
      {children}
    </div>
  )
}
