"use client";

import React, { useEffect, useState } from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

interface VenmoDeepLinkProps {
  username: string;
  className?: string;
  children: React.ReactNode;
}

const VenmoDeepLink: React.FC<VenmoDeepLinkProps> = ({
  username,
  className,
  children,
}) => {
  const [isMobile, setIsMobile] = useState<boolean | null>(null);
  const [showFallbackDialog, setShowFallbackDialog] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      if (typeof window === "undefined") return false;
      const userAgent = navigator.userAgent || navigator.vendor;
      return /android|iphone|ipad|ipod/i.test(userAgent.toLowerCase());
    };

    setIsMobile(checkMobile());
  }, []);

  const handleVenmoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (isMobile === null) return;

    // On desktop, let the default behavior handle it (opens in new tab)
    if (!isMobile) return;

    // On mobile, prevent default and try deep linking
    e.preventDefault();

    const venmoDeepLink = `venmo://users/${username}`;
    const openedAt = Date.now();

    // Try to open the app using iframe method
    const iframe = document.createElement("iframe");
    iframe.style.display = "none";
    iframe.src = venmoDeepLink;
    document.body.appendChild(iframe);

    // If we're still here after a delay, show the fallback dialog
    setTimeout(() => {
      document.body.removeChild(iframe);
      if (Date.now() - openedAt > 1000) {
        setShowFallbackDialog(true);
      }
    }, 1500);
  };

  const handleOpenBrowser = () => {
    window.open(`https://venmo.com/${username}`, "_blank");
    setShowFallbackDialog(false);
  };

  const handleInstallApp = () => {
    // Deep link to app store based on device
    const isIOS = /iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase());
    const appStoreUrl = isIOS
      ? "https://apps.apple.com/us/app/venmo/id351727428"
      : "https://play.google.com/store/apps/details?id=com.venmo";

    window.location.href = appStoreUrl;
    setShowFallbackDialog(false);
  };

  return (
    <>
      <a
        href={`https://venmo.com/${username}`}
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleVenmoClick}
        className={className}
      >
        {children}
      </a>

      <AlertDialog
        open={showFallbackDialog}
        onOpenChange={setShowFallbackDialog}
      >
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Venmo App Not Found</AlertDialogTitle>
            <AlertDialogDescription>
              The Venmo app doesn&apos;t seem to be installed. Would you like to
              install it or continue to the website?
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={handleInstallApp}>
              Install Venmo App
            </AlertDialogAction>
            <AlertDialogAction onClick={handleOpenBrowser}>
              Open in Browser
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
};

export default VenmoDeepLink;
