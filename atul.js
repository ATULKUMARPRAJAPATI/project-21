function hasColled(Lbullet,Lwall){
    bulletRightEdge=Lbullet.x+Lbullet.width;
    wallRightEdge=Lwall.x;
    if(bulletRightEdge>=wallRightEdge){
      return true;
    }
      return false;
  }