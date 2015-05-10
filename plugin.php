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

class chartFolha extends Chart {

  public static function defaultMetaData() {
        return array(
            'data' => array(
                'transpose' => false,
                'vertical-header' => true,
                'horizontal-header' => true,
            ),
            'visualize' => array(
                'highlighted-series' => array(),
                'highlighted-values' => array()
            ),
            'describe' => array(
                'source-name' => 'Fonte ???',
                'source-url' => '',
                'number-format' => '-',
                'number-divisor' => 0,
                'number-append' => '',
                'number-prepend' => '',
                'intro' => 'Linha fina'
            ),
            'publish' => array(
                'embed-width' => 620,
                'embed-height' => 455
            )
        );
    }

}
