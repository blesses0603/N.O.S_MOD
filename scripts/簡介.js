Events.on(EventType.ClientLoadEvent, cons(e => {
	var dialog = new BaseDialog("[#9CB664FF]Nos Mod");
	//dialog.cont.image(Core.atlas.find("curse-of-flesh-logo")).row();;
	dialog.buttons.defaults().size(210, 64);
	dialog.buttons.button("@close", run(() => {
		dialog.hide();
	})).size(210, 64);
	dialog.cont.pane((() => {
		var table = new Table();
		table.add("[#9CB664FF]作者碎念：一個人製作、除錯真的很心累").left().growX().wrap().width(600).maxWidth(1000).pad(4).labelAlign(Align.left);
		table.row();
		table.button("[green]版本內容", run(() => {
			var dialog2 = new BaseDialog("[green]版本內容")
			var table = new Table();
			dialog2.cont.add("遊玩Mod版本：1.0 \n新增：初始版本").row();;
			dialog2.buttons.defaults().size(210, 64);
			dialog2.buttons.button("@close", run(() => {
				dialog2.hide();
			})).size(210, 64);
			dialog2.show();
		})).size(210, 64);
		return table;
	})()).grow().center().maxWidth(620);
	dialog.show();
}));