{ pkgs }: {
	deps = [
    pkgs.nodejs-16_x
		pkgs.cowsay
		pkgs.unzip
		pkgs.vim
    pkgs.yarn
		pkgs.nodePackages.npm
    pkgs.nodePackages.typescript-language-server
	];
}