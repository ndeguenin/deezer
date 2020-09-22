import React from "react"

function ItemDesktop(iteminfo) {

    return (
        <tr>
            <td>
                {iteminfo.iteminfo.index}
            </td>
            <td>
                {iteminfo.iteminfo.title_short}
            </td>
            <td>
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

export default ItemDesktop;