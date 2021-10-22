import React, { useState, FC, useEffect, useRef } from "react"
/**
 *
 * @param fill - default #fff
 * @param size - default 50
 * @param name - Name of social icon
 */
const Icon: FC<any> = ({
  name,
  size = 50,
  fill = "#fff",
  onReady: setIsReady,
  onClick,
}) => {
  const [loading, setLoading] = useState(false)
  const ImportedIconRef = useRef(null)

  const importIcon = async () => {
    try {
      const { default: namedImport } = await import(
        `../img/social/${name.toLowerCase()}.svg`
      )
      ImportedIconRef.current = namedImport
    } catch (err) {
      throw err
    } finally {
      setLoading(false)
      setIsReady && setIsReady(true)
    }
  }

  useEffect(() => {
    setLoading(true)
    importIcon()

    return () => {
      ImportedIconRef.current = false
    }
  }, [])

  if (loading && !ImportedIconRef.current) {
    return (
      <svg
        width={size}
        height={size}
        fill={fill}
        version="1.1"
        viewBox={`0 0 ${size} ${size}`}
      />
    )
  }
  if (!loading && ImportedIconRef.current) {
    const { current: ImportedIcon } = ImportedIconRef
    return (
      <ImportedIcon
        width={size}
        height={size}
        fill={fill}
        className="icon"
        onClick={() => onClick && onClick()}
      />
    )
  }

  return null
}

export default Icon
