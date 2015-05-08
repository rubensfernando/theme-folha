<?php

class DatawrapperPlugin_ThemeFolha extends DatawrapperPlugin {

    public function init() {
        DatawrapperTheme::register($this, $this->getMeta());
    }

    private function getMeta() {
        return array(
            'id' => 'folha',
            'title' => 'Folha',
            'version' => '1.0'
        );
    }

}