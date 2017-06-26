webpackJsonp(["app/js/open-course-manage/lesson/index"],[function(e,n,t){"use strict";function s(e){return e&&e.__esModule?e:{default:e}}function a(){var e=$(".lesson-manage-panel").data("file-status-url"),n=new Array;$(".lesson-list .item-lesson").each(function(){isNaN($(this).data("file-id"))||n.push($(this).data("file-id"))}),0!=n.length&&$.post(e,{ids:n.join(",")},function(e){if(e&&0!=e.length)for(var n=0;n<e.length;n++){var t=e[n];$.inArray(t.type,["video","ppt","document"])>-1&&("waiting"==t.convertStatus||"doing"==t.convertStatus?$("li[data-file-id="+t.id+"]").find('span[data-role="mediaStatus"]').append("<span class='text-warning'>"+Translator.trans("open_course.file_format_conversion_hint")+"</span>"):"error"==t.convertStatus?$("li[data-file-id="+t.id+"]").find('span[data-role="mediaStatus"]').append("<span class='text-danger'>"+Translator.trans("open_course.file_format_conversion_failed_hint")+"</span>"):"success"==t.convertStatus&&($("li[data-file-id="+t.id+"]").find(".mark-manage").show(),$("li[data-file-id="+t.id+"]").find(".mark-manage-divider").show()))}})}function o(e,n){$.post(n.data("sortUrl"),{ids:e},function(e){var t=chapterNum=unitNum=0;n.find(".item-lesson, .item-chapter").each(function(){var e=$(this);e.hasClass("item-lesson")?(t++,e.find(".number").text(t)):e.hasClass("item-chapter-unit")?(unitNum++,e.find(".number").text(unitNum)):e.hasClass("item-chapter")&&(chapterNum++,unitNum=0,e.find(".number").text(chapterNum))})})}var r=t("8f840897d9471c8c1fbd"),i=s(r),d=t("b334fd7e4c5a19234db2"),l=s(d),c=$("#course-item-list");(0,i.default)({element:"#course-item-list",distance:20,itemSelector:".item-lesson, .item-chapter"},function(e){o(e,$("#course-item-list"))}),c.on("click",".delete-lesson-btn",function(e){if(confirm(Translator.trans("open_course.lesson_delete_hint"))){var n=$(e.currentTarget),t=function(){return n.parents(".item-chapter")[0]},s=function(){t()?n.parents(".item-chapter").remove():n.parents(".item-lesson").remove()};$.post($(this).data("url"),function(e){s(),o(c),$(".lesson-manage-panel").find(".only-one-lesson-notify").show(),$(".lesson-manage-panel").find("#lesson-create-btn").attr("disabled",!1),(0,l.default)("success",Translator.trans("open_course.lesson_delete_success_hint"))},"json")}}),c.on("click",".delete-chapter-btn",function(e){var n=$(this).data("chapter"),t=$(this).data("part");if(confirm(Translator.trans("open_course.chapter_delete_hint",{chapterName:n,partName:t}))){var s=$(e.currentTarget);$.post($(this).data("url"),function(e){s.parents(".item-chapter").remove(),o(c),(0,l.default)("success"+n+t+Translator.trans("open_course_chapter_delete_success_hint"))},"json")}}),c.on("click",".replay-lesson-btn",function(e){confirm(Translator.trans("open_course.add_replay_hint"))&&$.post($(this).data("url"),function(e){if(e.error)10019==e.error.code?(0,l.default)("danger",Translator.trans("open_course.add_replay_failed_where_live")):(0,l.default)("danger",Translator.trans("open_course.add_replay_failed_hint"));else{var n="#"+$(e).attr("id");$(n).replaceWith(e),(0,l.default)("success",Translator.trans("open_course.add_replay_success_hint"))}})}),c.on("click",".publish-lesson-btn",function(e){$(e.currentTarget);$.post($(this).data("url"),function(e){var n="#"+$(e).attr("id");$(n).find(".item-content .unpublish-warning").remove(),$(n).find(".item-actions .publish-lesson-btn").parent().addClass("hidden").removeClass("show"),$(n).find(".item-actions .unpublish-lesson-btn").parent().addClass("show").removeClass("hidden"),$(n).find(".item-actions .delete-lesson-btn").parent().addClass("hidden").removeClass("show"),$(n).find(".btn-link").tooltip(),(0,l.default)("success",Translator.trans("open_course.publish_lesson_hint"))})}),c.on("click",".unpublish-lesson-btn",function(e){$(e.currentTarget);$.post($(this).data("url"),function(e){var n="#"+$(e).attr("id");$(n).find(".item-content").append('<span class="unpublish-warning text-warning">'+Translator.trans("open_course.unpublish_hint")+"</span>"),$(n).find(".item-actions .publish-lesson-btn").parent().addClass("show").removeClass("hidden"),$(n).find(".item-actions .unpublish-lesson-btn").parent().addClass("hidden").removeClass("show"),$(n).find(".item-actions .delete-lesson-btn").parent().addClass("show").removeClass("hidden"),$(n).find(".btn-link").tooltip(),(0,l.default)("success",Translator.trans("open_course.unpublish_success_hint"))})}),c.on("click",".delete-exercise-btn",function(e){if(confirm(Translator.trans("open_course.exercise_delete_hint"))){$(e.currentTarget);$.post($(this).data("url"),function(e){(0,l.default)("success",Translator.trans("open_course.exercise_delete_success_hint")),window.location.reload()},"json")}}),c.on("click",".delete-homework-btn",function(e){if(confirm(Translator.trans("open_course.homework_delete_hint"))){$(e.currentTarget);$.post($(this).data("url"),function(e){(0,l.default)("success",Translator.trans("open_course.homework_delete_success_hint")),window.location.reload()},"json")}}),$("#course-item-list .item-actions .btn-link").tooltip(),$("#course-item-list .fileDeletedLesson").tooltip(),$(".dropdown-menu").parent().on("shown.bs.dropdown",function(){"block"==$(this).find(".dropdown-menu-more").css("display")?($(this).parent().find(".dropdown-menu-more").mouseout(function(){$(this).parent().find(".dropdown-menu-more").hide()}),$(this).parent().find(".dropdown-menu-more").mouseover(function(){$(this).parent().find(".dropdown-menu-more").show()})):$(this).parent().find(".dropdown-menu-more").show()}),$(".dropdown-menu").parent().on("hide.bs.dropdown",function(){$(this).find(".dropdown-menu-more").show()}),a(),$("#lesson-create-btn").click(function(){var e=$(this).data("url");$.get(e,function(e){e.result?(0,l.default)("warning",Translator.trans("open_course.add_lesson_hint")):($("#modal").html(e),$("#modal").modal("show"))})})}]);