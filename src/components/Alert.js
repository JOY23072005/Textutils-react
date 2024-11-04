import React from 'react'

export default function alerts(props) {
  return (
    props.alert&&<div class={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
      <strong>{props.alert.type[0].toUpperCase()+props.alert.type.slice(1)}</strong> {props.alert.message}
    </div>
  )
}
