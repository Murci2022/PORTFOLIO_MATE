"use client" // this is a client component
import React from "react"
import { useState, useEffect } from "react"
import { Link } from "react-scroll/modules"
import { useTheme } from "next-themes"
import { RiMoonFill, RiSunLine } from "react-icons/ri"
import { IoMdMenu, IoMdClose } from "react-icons/io"

interface NavItems {
    label: string
    page: string
}

const Navbar = () => {
    return (
        <div>Navbar</div>
    )
}

export default Navbar