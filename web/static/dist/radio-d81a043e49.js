var player,$player,volume=55,is_playing=!1;function stopAllPlayers(){player.pause(),player.src="",is_playing=!1,$(".btn-audio").each(function(){var e=$(this).removeClass("playing").find("i");e.hasClass("material-icons")?e.text("play_circle_filled"):e.removeClass("zmdi-stop").addClass("zmdi-play")}),$("#radio-player-controls").removeClass("jp-state-playing")}function setVolume(e){volume=e;var l=Math.round(100*volume);$(".jp-volume-bar-value").css("width",l+"%"),player.volume=Math.pow(volume,3),store.enabled&&store.set("player_volume",100*volume)}function playAudio(e){player.src=e,player.play().catch(function(e){console.error(e),stopAllPlayers()})}function handlePlayClick(e){if(btn=$('.btn-audio[data-url="'+e+'"]'),btn.hasClass("playing"))stopAllPlayers();else{is_playing&&stopAllPlayers(),playAudio(e);var l=btn.addClass("playing").find("i");l.hasClass("material-icons")?l.text("pause_circle_filled"):l.removeClass("zmdi-play").addClass("zmdi-stop")}}$(function(){store.enabled&&void 0!==store.get("player_volume")&&(volume=store.get("player_volume",volume)),$(".btn-audio").on("click",function(e){return e.preventDefault(),handlePlayClick($(this).data("url")),!1}),player=document.createElement("audio"),$player=$(player),setVolume(volume/100),$player.on("play",function(e){is_playing=!0,$(".jp-unmute").hide(),$("#radio-player-controls,#radio-embedded-controls").addClass("jp-state-playing");var l=Math.round(100*$player.volume);$(".jp-volume-bar-value").css("width",l+"%")}),$player.on("ended",function(e){stopAllPlayers()}),"mediaSession"in navigator&&navigator.mediaSession.setActionHandler("pause",function(){stopAllPlayers()}),$(".jp-pause").on("click",function(e){stopAllPlayers()}),$(".jp-mute").on("click",function(e){player.volume=0,$(".jp-unmute").show(),$(".jp-mute").hide()}),$(".jp-unmute").on("click",function(e){setVolume(volume),$(".jp-unmute").hide(),$(".jp-mute").show()}),$(".jp-volume-bar").on("click",function(e){var l=$(e.currentTarget),a=l.offset(),o=e.pageX-a.left,t=l.width();l.height(),e.pageY,a.top,l.height();setVolume(o/t)}),$('.btn-audio[data-autoplay="true"]:first').click()});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJhZGlvLmpzIl0sIm5hbWVzIjpbInBsYXllciIsIiRwbGF5ZXIiLCJ2b2x1bWUiLCJpc19wbGF5aW5nIiwic3RvcEFsbFBsYXllcnMiLCJwYXVzZSIsInNyYyIsIiQiLCJlYWNoIiwicGxheV9pY29uIiwidGhpcyIsInJlbW92ZUNsYXNzIiwiZmluZCIsImhhc0NsYXNzIiwidGV4dCIsImFkZENsYXNzIiwic2V0Vm9sdW1lIiwibmV3X3ZvbHVtZSIsInZvbHVtZV9wZXJjZW50IiwiTWF0aCIsInJvdW5kIiwiY3NzIiwicG93Iiwic3RvcmUiLCJlbmFibGVkIiwic2V0IiwicGxheUF1ZGlvIiwic291cmNlX3VybCIsInBsYXkiLCJjYXRjaCIsImVycm9yIiwiY29uc29sZSIsImhhbmRsZVBsYXlDbGljayIsImF1ZGlvX3NvdXJjZSIsImJ0biIsInVuZGVmaW5lZCIsImdldCIsIm9uIiwiZSIsInByZXZlbnREZWZhdWx0IiwiZGF0YSIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImhpZGUiLCJuYXZpZ2F0b3IiLCJtZWRpYVNlc3Npb24iLCJzZXRBY3Rpb25IYW5kbGVyIiwic2hvdyIsIiRiYXIiLCJjdXJyZW50VGFyZ2V0Iiwib2Zmc2V0IiwieCIsInBhZ2VYIiwibGVmdCIsInciLCJ3aWR0aCIsImhlaWdodCIsInBhZ2VZIiwidG9wIiwiY2xpY2siXSwibWFwcGluZ3MiOiJBQUlBLElBRUlBLE9BQ0FDLFFBSEFDLE9BQVMsR0FDVEMsWUFBYSxFQUlqQixTQUFTQyxpQkFFTEosT0FBT0ssUUFDUEwsT0FBT00sSUFBTSxHQUViSCxZQUFhLEVBRWJJLEVBQUUsY0FBY0MsS0FBSyxXQUNqQixJQUFJQyxFQUFZRixFQUFFRyxNQUFNQyxZQUFZLFdBQVdDLEtBQUssS0FDaERILEVBQVVJLFNBQVMsa0JBQ25CSixFQUFVSyxLQUFLLHNCQUVmTCxFQUFVRSxZQUFZLGFBQWFJLFNBQVMsZUFJcERSLEVBQUUsMEJBQTBCSSxZQUFZLG9CQUc1QyxTQUFTSyxVQUFVQyxHQUVmZixPQUFTZSxFQUVULElBQUlDLEVBQWlCQyxLQUFLQyxNQUFlLElBQVRsQixRQUNoQ0ssRUFBRSx3QkFBd0JjLElBQUksUUFBU0gsRUFBZSxLQUV0RGxCLE9BQU9FLE9BQVNpQixLQUFLRyxJQUFJcEIsT0FBTyxHQUU1QnFCLE1BQU1DLFNBQ05ELE1BQU1FLElBQUksZ0JBQXdCLElBQVB2QixRQUduQyxTQUFTd0IsVUFBVUMsR0FFZjNCLE9BQU9NLElBQU1xQixFQUNiM0IsT0FBTzRCLE9BQU9DLE1BQU0sU0FBU0MsR0FDekJDLFFBQVFELE1BQU1BLEdBQ2QxQixtQkFJUixTQUFTNEIsZ0JBQWdCQyxHQUlyQixHQUZBQyxJQUFNM0IsRUFBRSx3QkFBd0IwQixFQUFhLE1BRXpDQyxJQUFJckIsU0FBUyxXQUNiVCxxQkFDRyxDQUNDRCxZQUNBQyxpQkFHSnNCLFVBQVVPLEdBRVYsSUFBSXhCLEVBQVl5QixJQUFJbkIsU0FBUyxXQUFXSCxLQUFLLEtBQ3pDSCxFQUFVSSxTQUFTLGtCQUNuQkosRUFBVUssS0FBSyx1QkFFZkwsRUFBVUUsWUFBWSxhQUFhSSxTQUFTLGNBS3hEUixFQUFFLFdBR01nQixNQUFNQyxjQUEwQ1csSUFBL0JaLE1BQU1hLElBQUksbUJBQzNCbEMsT0FBU3FCLE1BQU1hLElBQUksZ0JBQWlCbEMsU0FFeENLLEVBQUUsY0FBYzhCLEdBQUcsUUFBUyxTQUFTQyxHQUdqQyxPQUZBQSxFQUFFQyxpQkFDRlAsZ0JBQWdCekIsRUFBRUcsTUFBTThCLEtBQUssU0FDdEIsSUFJWHhDLE9BQVN5QyxTQUFTQyxjQUFjLFNBQ2hDekMsUUFBVU0sRUFBRVAsUUFFWmdCLFVBQVVkLE9BQU8sS0FHakJELFFBQVFvQyxHQUFHLE9BQVEsU0FBU0MsR0FDeEJuQyxZQUFhLEVBRWJJLEVBQUUsY0FBY29DLE9BQ2hCcEMsRUFBRSxtREFBbURRLFNBQVMsb0JBRTlELElBQUlHLEVBQWlCQyxLQUFLQyxNQUF1QixJQUFqQm5CLFFBQVFDLFFBQ3hDSyxFQUFFLHdCQUF3QmMsSUFBSSxRQUFTSCxFQUFlLE9BRzFEakIsUUFBUW9DLEdBQUcsUUFBUyxTQUFTQyxHQUN6QmxDLG1CQUdBLGlCQUFrQndDLFdBQ2xCQSxVQUFVQyxhQUFhQyxpQkFBaUIsUUFBUyxXQUM3QzFDLG1CQUtSRyxFQUFFLGFBQWE4QixHQUFHLFFBQVMsU0FBU0MsR0FDaENsQyxtQkFHSkcsRUFBRSxZQUFZOEIsR0FBRyxRQUFTLFNBQVNDLEdBQy9CdEMsT0FBT0UsT0FBUyxFQUNoQkssRUFBRSxjQUFjd0MsT0FDaEJ4QyxFQUFFLFlBQVlvQyxTQUdsQnBDLEVBQUUsY0FBYzhCLEdBQUcsUUFBUyxTQUFTQyxHQUNqQ3RCLFVBQVVkLFFBQ1ZLLEVBQUUsY0FBY29DLE9BQ2hCcEMsRUFBRSxZQUFZd0MsU0FHbEJ4QyxFQUFFLGtCQUFrQjhCLEdBQUcsUUFBUyxTQUFTQyxHQUNyQyxJQUFJVSxFQUFPekMsRUFBRStCLEVBQUVXLGVBQ1hDLEVBQVNGLEVBQUtFLFNBQ2RDLEVBQUliLEVBQUVjLE1BQVFGLEVBQU9HLEtBQ3JCQyxFQUFJTixFQUFLTyxRQUNMUCxFQUFLUSxTQUFXbEIsRUFBRW1CLE1BQVFQLEVBQU9RLElBQ2pDVixFQUFLUSxTQUVieEMsVUFBVW1DLEVBQUVHLEtBSWhCL0MsRUFBRSwwQ0FBMENvRCIsImZpbGUiOiJyYWRpby5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogUmFkaW8gUGxheWVyIFNjcmlwdFxuICovXG5cbnZhciB2b2x1bWUgPSA1NSxcbiAgICBpc19wbGF5aW5nID0gZmFsc2UsXG4gICAgcGxheWVyLFxuICAgICRwbGF5ZXI7XG5cbmZ1bmN0aW9uIHN0b3BBbGxQbGF5ZXJzKClcbntcbiAgICBwbGF5ZXIucGF1c2UoKTtcbiAgICBwbGF5ZXIuc3JjID0gJyc7XG5cbiAgICBpc19wbGF5aW5nID0gZmFsc2U7XG5cbiAgICAkKCcuYnRuLWF1ZGlvJykuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIHBsYXlfaWNvbiA9ICQodGhpcykucmVtb3ZlQ2xhc3MoJ3BsYXlpbmcnKS5maW5kKCdpJyk7XG4gICAgICAgIGlmIChwbGF5X2ljb24uaGFzQ2xhc3MoJ21hdGVyaWFsLWljb25zJykpIHtcbiAgICAgICAgICAgIHBsYXlfaWNvbi50ZXh0KCdwbGF5X2NpcmNsZV9maWxsZWQnKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHBsYXlfaWNvbi5yZW1vdmVDbGFzcygnem1kaS1zdG9wJykuYWRkQ2xhc3MoJ3ptZGktcGxheScpO1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICAkKCcjcmFkaW8tcGxheWVyLWNvbnRyb2xzJykucmVtb3ZlQ2xhc3MoJ2pwLXN0YXRlLXBsYXlpbmcnKTtcbn1cblxuZnVuY3Rpb24gc2V0Vm9sdW1lKG5ld192b2x1bWUpXG57XG4gICAgdm9sdW1lID0gbmV3X3ZvbHVtZTtcblxuICAgIHZhciB2b2x1bWVfcGVyY2VudCA9IE1hdGgucm91bmQodm9sdW1lICogMTAwKTtcbiAgICAkKCcuanAtdm9sdW1lLWJhci12YWx1ZScpLmNzcygnd2lkdGgnLCB2b2x1bWVfcGVyY2VudCsnJScpO1xuXG4gICAgcGxheWVyLnZvbHVtZSA9IE1hdGgucG93KHZvbHVtZSwzKTtcblxuICAgIGlmIChzdG9yZS5lbmFibGVkKVxuICAgICAgICBzdG9yZS5zZXQoJ3BsYXllcl92b2x1bWUnLCB2b2x1bWUqMTAwKTtcbn1cblxuZnVuY3Rpb24gcGxheUF1ZGlvKHNvdXJjZV91cmwpXG57XG4gICAgcGxheWVyLnNyYyA9IHNvdXJjZV91cmw7XG4gICAgcGxheWVyLnBsYXkoKS5jYXRjaChmdW5jdGlvbihlcnJvcikge1xuICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICAgICAgc3RvcEFsbFBsYXllcnMoKTtcbiAgICB9KTtcbn1cblxuZnVuY3Rpb24gaGFuZGxlUGxheUNsaWNrKGF1ZGlvX3NvdXJjZSlcbntcbiAgICBidG4gPSAkKCcuYnRuLWF1ZGlvW2RhdGEtdXJsPVwiJythdWRpb19zb3VyY2UrJ1wiXScpO1xuXG4gICAgaWYgKGJ0bi5oYXNDbGFzcygncGxheWluZycpKSB7XG4gICAgICAgIHN0b3BBbGxQbGF5ZXJzKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKGlzX3BsYXlpbmcpIHtcbiAgICAgICAgICAgIHN0b3BBbGxQbGF5ZXJzKCk7XG4gICAgICAgIH1cblxuICAgICAgICBwbGF5QXVkaW8oYXVkaW9fc291cmNlKTtcblxuICAgICAgICB2YXIgcGxheV9pY29uID0gYnRuLmFkZENsYXNzKCdwbGF5aW5nJykuZmluZCgnaScpO1xuICAgICAgICBpZiAocGxheV9pY29uLmhhc0NsYXNzKCdtYXRlcmlhbC1pY29ucycpKSB7XG4gICAgICAgICAgICBwbGF5X2ljb24udGV4dCgncGF1c2VfY2lyY2xlX2ZpbGxlZCcpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcGxheV9pY29uLnJlbW92ZUNsYXNzKCd6bWRpLXBsYXknKS5hZGRDbGFzcygnem1kaS1zdG9wJyk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbiQoZnVuY3Rpb24oKSB7XG5cbiAgICAvLyBDaGVjayB3ZWJzdG9yYWdlIGZvciBleGlzdGluZyB2b2x1bWUgcHJlZmVyZW5jZS5cbiAgICBpZiAoc3RvcmUuZW5hYmxlZCAmJiBzdG9yZS5nZXQoJ3BsYXllcl92b2x1bWUnKSAhPT0gdW5kZWZpbmVkKVxuICAgICAgICB2b2x1bWUgPSBzdG9yZS5nZXQoJ3BsYXllcl92b2x1bWUnLCB2b2x1bWUpO1xuXG4gICAgJCgnLmJ0bi1hdWRpbycpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBoYW5kbGVQbGF5Q2xpY2soJCh0aGlzKS5kYXRhKCd1cmwnKSk7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9KTtcblxuICAgIC8vIENyZWF0ZSBhdWRpbyBlbGVtZW50LlxuICAgIHBsYXllciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2F1ZGlvJyk7XG4gICAgJHBsYXllciA9ICQocGxheWVyKTtcblxuICAgIHNldFZvbHVtZSh2b2x1bWUvMTAwKTtcblxuICAgIC8vIEhhbmRsZSBldmVudHMuXG4gICAgJHBsYXllci5vbigncGxheScsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgaXNfcGxheWluZyA9IHRydWU7XG5cbiAgICAgICAgJCgnLmpwLXVubXV0ZScpLmhpZGUoKTtcbiAgICAgICAgJCgnI3JhZGlvLXBsYXllci1jb250cm9scywjcmFkaW8tZW1iZWRkZWQtY29udHJvbHMnKS5hZGRDbGFzcygnanAtc3RhdGUtcGxheWluZycpO1xuXG4gICAgICAgIHZhciB2b2x1bWVfcGVyY2VudCA9IE1hdGgucm91bmQoJHBsYXllci52b2x1bWUgKiAxMDApO1xuICAgICAgICAkKCcuanAtdm9sdW1lLWJhci12YWx1ZScpLmNzcygnd2lkdGgnLCB2b2x1bWVfcGVyY2VudCsnJScpO1xuICAgIH0pO1xuXG4gICAgJHBsYXllci5vbignZW5kZWQnLCBmdW5jdGlvbihlKSB7XG4gICAgICAgIHN0b3BBbGxQbGF5ZXJzKCk7XG4gICAgfSk7XG5cbiAgICBpZiAoJ21lZGlhU2Vzc2lvbicgaW4gbmF2aWdhdG9yKSB7XG4gICAgICAgIG5hdmlnYXRvci5tZWRpYVNlc3Npb24uc2V0QWN0aW9uSGFuZGxlcigncGF1c2UnLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHN0b3BBbGxQbGF5ZXJzKCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIEhhbmRsZSBidXR0b24gY2xpY2tzLlxuICAgICQoJy5qcC1wYXVzZScpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgc3RvcEFsbFBsYXllcnMoKTtcbiAgICB9KTtcblxuICAgICQoJy5qcC1tdXRlJykub24oJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuICAgICAgICBwbGF5ZXIudm9sdW1lID0gMDtcbiAgICAgICAgJCgnLmpwLXVubXV0ZScpLnNob3coKTtcbiAgICAgICAgJCgnLmpwLW11dGUnKS5oaWRlKCk7XG4gICAgfSk7XG5cbiAgICAkKCcuanAtdW5tdXRlJykub24oJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuICAgICAgICBzZXRWb2x1bWUodm9sdW1lKTtcbiAgICAgICAgJCgnLmpwLXVubXV0ZScpLmhpZGUoKTtcbiAgICAgICAgJCgnLmpwLW11dGUnKS5zaG93KCk7XG4gICAgfSk7XG5cbiAgICAkKCcuanAtdm9sdW1lLWJhcicpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgdmFyICRiYXIgPSAkKGUuY3VycmVudFRhcmdldCksXG4gICAgICAgICAgICBvZmZzZXQgPSAkYmFyLm9mZnNldCgpLFxuICAgICAgICAgICAgeCA9IGUucGFnZVggLSBvZmZzZXQubGVmdCxcbiAgICAgICAgICAgIHcgPSAkYmFyLndpZHRoKCksXG4gICAgICAgICAgICB5ID0gJGJhci5oZWlnaHQoKSAtIGUucGFnZVkgKyBvZmZzZXQudG9wLFxuICAgICAgICAgICAgaCA9ICRiYXIuaGVpZ2h0KCk7XG5cbiAgICAgICAgc2V0Vm9sdW1lKHgvdyk7XG4gICAgfSk7XG5cbiAgICAvLyBIYW5kbGUgYXV0b3BsYXkuXG4gICAgJCgnLmJ0bi1hdWRpb1tkYXRhLWF1dG9wbGF5PVwidHJ1ZVwiXTpmaXJzdCcpLmNsaWNrKCk7XG5cbn0pO1xuIl19