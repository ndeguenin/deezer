import React from "react"

function ItemMobile(iteminfo) {

    return (
        <tr>
            <td>
                {iteminfo.iteminfo.title_short}<br/>
                {iteminfo.iteminfo.artist.name}
            </td>
            <td className="text-left">
                <img
                    src={iteminfo.iteminfo.album.cover_small}
                /> {iteminfo.iteminfo.album.title}
            </td>
        </tr>
    )
}

export default ItemMobile;