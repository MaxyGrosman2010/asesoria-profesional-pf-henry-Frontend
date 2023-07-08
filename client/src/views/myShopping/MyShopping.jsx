

const MyShopping = () => {
    
  return (
    <div>
        <table>
            <tbody>
                <thead>
                    <tr>
                        <th>service</th>
                        <th>price</th>
                    </tr>
                </thead>
                <tbody>
                {/* aca se deben mapear las compras */}
                    <tr>
                        <td>{'service'}</td>
                        <td>{'price'}</td>
                    </tr>
                </tbody>
            </tbody>
        </table>
    </div>
  )
}

export default MyShopping